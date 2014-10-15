/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   less.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

var less = require('less');

/*
** The Style's class is auto lauches and adds the stylesheets.
*/

var Style = {
  'root': './app/style/',
  'node': document.head,
  'theme': Conf.style,

  'content': function (arg) {
    var address = arg.address;
    var node = arg.node;

    File.read(address).then(function(res, err) {
      less.render(res, function (e, css) {
        node.textContent = css;
      });
    });
  },
  'append': function (arg) {
    var node = Style.node;
    var root = Style.root;
    var address = root + arg;
    var link;
  
    link = document.createElement('style');
    node.appendChild(link);
    Style.content({
      'address': address,
      'node': link
    })
  },
  'default': window.addEventListener('load', function() {
    Style.append(Style.theme + document.title + '.less');
  }, false)
};
