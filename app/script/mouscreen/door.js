/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   door.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

var py     = require('python-shell');
var socket = require('tcp.js').client(
  Conf.socket.ip,
  Conf.socket.port,
  Conf.socket.buffer
);

/* 
** The Door's class is the socket to a python's server
** of command' control.
*/

var Door = {
  /* The procedure opens the socket. */
  'socket': undefined,
  'online': false,
  'active': Conf.mouscreen.active,
  'run': py.run('server.py', {
    'scriptPath': './app/python/',
    'pythonPath': Conf.python.path,
    'args': [
      Conf.socket.ip,
      Conf.socket.port,
      Conf.socket.buffer
    ]
  }, function (err, results) {
    if (err)
      console.log('door.run', err);
    Door.online = false;
  }),

  /* The function closes the server when the event's close is activated. */
  'close': function (arg) {
    if (Door.online) {
      Door.online = false;
      Door.socket.send(null, null);
    }
  },
  /* The function is a new message from the server. */
  'open': function (data) {
    Door.online = true;
    if (Door.active) {
      Cursor.warp(Cursor.position);
      Door.send({'class': 'eventcall', 'method': 'capture'}, {'stop': true});
    }
  },
  /* The function event a json to the socket -{event, content}-. */
  'send': function (event, content) {
    try {
      if (Door.online) {
        Door.socket.send(event, content); 
      }
      else window.setTimeout(function (arg) {
        Door.socket.send(event, content);
      }, 1000);
    }
    catch (err) {
      console.log('door.send', err.message);
    }
  },
  /* The function connects the socket. */
  'default': window.addEventListener('load', function() {
    socket.on('connection', function (dsocket) {
      Door.socket = dsocket;
      Door.socket.on('console', Debug.console)
      Door.socket.on('connect', Door.open);
      Door.socket.on('mouseup', Close.clear);
      if (Door.active) {
        Door.socket.on('mousedown', Event.down);
        Door.socket.on('mouseup', Event.up);
        Door.socket.on('mouseup', Zoom.resize);
      }
    });
  }, false)
};
