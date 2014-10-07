/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   conf.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use unstrict';

var package = require('package')();

var Configuration = package.configuration;

var Version = {
  'target': 'version',
  'content': package.version,

  'init': function (body) {
    var dom = body.querySelector(Version.target);

    dom.textContent = Lang.translate('version', {
      'number': Version.content
    });
  }
}
