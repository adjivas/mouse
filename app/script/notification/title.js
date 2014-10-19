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
    var json = document.location.toString();

    json = json.substr(json.indexOf('?') + 1);
    json = Base64.decode(json);
    json = JSON.parse(json);
    Title.json = json;
  },
  'body': window.addEventListener('load', function(arg) {
    Title.body = document.body;
  }, false),

  'name': function (arg) {
    var body = Title.body;
    var json = Title.json;
    var node = document.createElement(Title.target);
    var content;

    if (json.name) {
      content = document.createTextNode(json.name);
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
