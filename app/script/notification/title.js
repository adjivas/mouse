/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   title.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

var gui = require('nw.gui');
var Base64 = require('js-base64').Base64;

/*
** The Title's class is auto calls for init the noficiation's program
** and auto closes the program.
*/


var Title = {
  'target': 'notif',
  'wind': gui.Window.get(),
  'json': function (arg) {
    var data = document.location.toString();

    data = data.substr(data.indexOf('?') + 1);
    data = Base64.decode(data);
    data = JSON.parse(data);
    Title.json = data;
  },
  'body': window.addEventListener('load', function(arg) {
    Title.body = document.body;
  }, false),

  'size': function (message) {
    var size = 1 + window.innerHeight * 0.9 | 0;
    var calc;

    while (--size) {
      calc = calculateSize(message, {
         'font': 'fantasy',
         'fontSize': size + 'px'
      });
      if (calc.width <= window.innerWidth
      &&  calc.height <= window.innerHeight)
        break ;
    }
    return (size);
  },
  'name': function (arg) {
    var body = Title.body;
    var name = Title.json.name;
    var node = document.createElement(Title.target);
    var size = 'font-size:' + Title.size(name) + 'px';
    var content;

    if (name) {
      content = document.createTextNode(name);
      node.setAttribute('style', size);
      node.appendChild(content);
      body.appendChild(node);
    }
  },
  'exit': function (arg) {
    var json = Title.json;
    var wind = Title.wind;

    if (json.time) {
      window.setTimeout(function (arg) {
        wind.close();
      }, json.time);
    }
  },
  'position': function (arg) {
    var json = Title.json;
    var func = Title.json.func;
    var left = Title.json.left;
    var top = Title.json.top;

    if (func && Position[func] !== undefined)
      Start.init(func, left, top);
  },
  'default': window.addEventListener('load', function (arg) {
    Title.json();
    Title.name();
    Title.position();
    Title.exit();
  }, false)
};
