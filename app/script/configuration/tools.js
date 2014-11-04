/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   tools.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

var Tools = {
  'target': 'tools',

  'init': function (arg) {
    var dom = document.querySelector(Tools.target);

    while (dom.firstChild)
      dom.removeChild(dom.firstChild);
    Close.build(dom);
    Language.build(dom);
    Warp.build(dom);
    Notification.build(dom);
    Synthse.build(dom);
  }
};
