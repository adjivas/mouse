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
  Configuration.socket.ip,
  Configuration.socket.port
);

/* 
** The Door's class is the socket to a python's server
** of command' control.
*/

var door = {
  /* The procedure opens the socket. */
  'socket': undefined,
  'online': false,
  'run': py.run('server.py', {
    'scriptPath': './app/python/',
    'pythonPath': 'C:/Python27/python.exe',
    'args': [
      Configuration.socket.ip,
      Configuration.socket.port,
      Configuration.socket.buffer
    ]
  }, function (err, results) {
    if (err)
      throw (err);
    door.online = false;
  }),

  /* The function closes the server when the event's close is activated. */
  'close': function (arg) {
    if (door.online) {
      door.online = false;
      door.socket.send(null, null);
    }
  },
  /* The function is a new message from the server. */
  'connect': function (data) {
    door.online = true;
  },
  /* The function event a json to the socket -{event, content}-. */
  'send': function (event, content) {
    if (door.online) {
      door.socket.send(event, content); 
    }
    else window.setTimeout(function (arg) {
      door.socket.send(event, content);
    }, 1000);
  },
  /* The function connects the socket. */
  'default': window.addEventListener('load', function() {
    socket.on('connection', function (dsocket) {
      door.socket = dsocket;
      door.socket.on('connect', door.connect);
      door.socket.on('console', Debug.console)
      door.socket.on('mousedown', Event.down);
      door.socket.on('mouseup', Event.up);
      door.socket.on('mouseup', Zoom.resize);
    });
  }, false)
};
