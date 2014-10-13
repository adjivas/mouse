/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   lang.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

var I18n = require('i18n-node')
var i18n = new I18n({
  'directory': Conf.lang.path
});

/* 
** The Lang's class is calls for translate the text.
*/

var Lang = {
  'locale': Conf.lang.locale,

  'translate': function (key, value) {
    var lang = i18n.t(Lang.locale, key, value)

    return (lang);
  }
};
