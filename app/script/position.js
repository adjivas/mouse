/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   position.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

var gui = require('nw.gui');

/*
** The position's Class is auto calls and moves the program to the cordinate.
*/

var Position = {
  'win': gui.Window.get(),

  'by': function (x, y) {
    var win = Position.win;

    win.moveBy(x, y);
  },
  'to': function (x, y) {
    var win = Position.win;

    win.moveTo(x, y);
  }
};
