/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   language.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Language's class updates the new lang.
*/

var Language = {
  'locales': Conf.lang.locales,

  'change': function (arg) {
    var name = arg.srcElement.id;
    var dom  = document.getElementById(name);

    Conf.lang.locale = dom.value;
    Lang.locale = dom.value;
    Tools.init(arg);
  },
  'option': function (key) {
    var tag = document.createElement('option');

    tag.textContent = Lang.translate(key, {});
    tag.setAttribute('value', key);
    if (key === Conf.lang.locale)
      tag.setAttribute('selected', 'selected');
    return (tag);
  },
  'build': function (dom) {
    var tag = document.createElement('select');
    var cnt = -1;

    tag.setAttribute('id', 'lang');
    tag.addEventListener('change', Language.change, false);
    while (Language.locales[++cnt])
      tag.appendChild(Language.option(Language.locales[cnt]));
    dom.appendChild(tag);
  }
};
