/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   warp.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Warp's class updates the new warp's mode.
*/

var Warp = {
  'locales': Conf.warp.locales,

  'change': function (arg) {
    var name = arg.srcElement.id;
    var dom  = document.getElementById(name);

    Conf.warp.locale = dom.value;
  },
  'option': function (key) {
    var tag = document.createElement('option');

    tag.textContent = Lang.translate(key, {});
    tag.setAttribute('value', key);
    if (key === Conf.warp.locale)
      tag.setAttribute('selected', 'selected');
    return (tag);
  },
  'build': function (dom) {
    var tag = document.createElement('select');
    var cnt = -1;

    tag.setAttribute('id', 'warp');
    tag.addEventListener('change', Warp.change, false);
    while (Warp.locales[++cnt])
      tag.appendChild(Warp.option(Warp.locales[cnt]));
    dom.appendChild(tag);
  }
};
