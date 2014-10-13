/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   free.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Free's class is call for not moves the cursor and left click.
*/

var Free = {
  'attribute': 'hidden',
  'click': 1,

  'start': function (number) {
    var dom;

    Event.forget = (typeof number !== 'number' ? 3 : number);
    Door.send({'class': 'mouse', 'method': 'click'}, {'click': Free.click});
    if (Pointer.time) {
      console.log('start');
      dom = document.querySelector(Pointer.target);
      dom.setAttribute(Free.attribute, Free.attribute);
      Pointer.rotate();
    }
  },
  'call': function (arg) {
    Free.start(1);
  },
  'end': function (arg) {
    var dom;

    console.log('end');
    dom = document.querySelector(Pointer.target);
    dom.removeAttribute(Free.attribute);
    Pointer.rotate();
  }
};
