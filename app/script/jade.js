/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   jade.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

var jade = require('jade');

var Body = {
  'root': './app/view/',
  'node': window.addEventListener('load', function() {
    Body.node = document.body;
  }, false),

  'inner': function (arg) {
    var root = Body.root;
    var node = Body.node;
    var fn = jade.compileFile(root + arg, {});

    if (node)
      node.innerHTML = fn();
  },
  'default': window.addEventListener('load', function() {
    Body.inner('mouse.jade');
  }, false)
}
