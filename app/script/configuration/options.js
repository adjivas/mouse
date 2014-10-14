/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   options.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

var Options = {
  'target': 'options',

  'init': function (body) {
    var dom = body.querySelector(Options.target);

    Close.build(dom);
    Language.build(dom);
    Notification.build(dom);
    Synthse.build(dom);
    Menu.init(dom);
  }
};
