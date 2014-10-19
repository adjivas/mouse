/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   version.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

var Version = {
  'target': 'version',
  'content': Package.version,

  'init': function (body) {
    var dom = body.querySelector(Version.target);

    dom.textContent = 'v' + Version.content;
  }
}
