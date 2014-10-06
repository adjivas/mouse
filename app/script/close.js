/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   close.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

var win = require('nw.gui').Window.get();

/*
** The class is a procedure of program exit.
*/

var close = {
  'hidden': win.on('close', function() {
    if (typeof Door !== 'undefined')
      Door.close();
    this.close(true);
  })
};
