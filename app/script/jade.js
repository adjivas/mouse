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

/*
** The Body's Class is auto calls for load the view.
*/

var Body = {
  'root': './app/view/',
  'node': window.addEventListener('load', function(arg) {
    Body.node = document.body;
  }, false),

  'inner': function (file) {
    var root = Body.root;
    var node = Body.node;
    var fn = jade.compileFile(root + file, {});

    if (node)
      node.innerHTML = fn();
    return (node);
  },
  'default': window.addEventListener('load', function(arg) {
    var node = Body.inner(document.title + '.jade');

    if (window.Menu)
      Menu.init(node);
    if (window.Version)
      Version.init(node);
    if (window.Options)
      Options.init(node);
  }, false)
};
