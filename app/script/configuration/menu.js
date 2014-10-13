/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   menu.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Menu's class updates speed of click's mode.
*/

var Menu = {
  'target': 'menu > *',

  'change': function (arg) {
    var name = arg.srcElement.id;
    var dom  = document.getElementById(name);

    dom.setAttribute("value", dom.value);
    Conf.mode[name] = window.parseInt(dom.value);
    console.log(name, dom.value);
  },
  'build': function (name) {
    var tag = document.createElement('input');

    tag.setAttribute("id", name);
    tag.setAttribute("type", "range");
    tag.setAttribute("value", Conf.mode[name]);
    tag.addEventListener('change', Menu.change, false);
    return (tag);
  },
  'init': function (body) {
    var dom = body.querySelectorAll(Menu.target);
    var cnt = -1;
    var name;

    while (dom[++cnt]) {
      name = dom[cnt].tagName.toLowerCase();
      dom[cnt].appendChild(Menu.build(name));
    }
  }
};
