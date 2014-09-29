/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   init.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

var jade = require('jade');

var Init = {
  'root': './app/view/',
  'node': window.addEventListener('load', function() {
    body.node = document.body;
  }, false),

  'load': function (arg) {
    var root = Init.root;
    var node = Init.node;
    var fn = jade.compileFile(root + arg, {});

    node.innerHTML = fn();	
  }
  'default': window.addEventListener('load', function() {
    Init.load('mouse.jade');
  }, false)
}
