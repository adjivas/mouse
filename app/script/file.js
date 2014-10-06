/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   file.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

var q  = require('q');
var fs = require('fs');

var file = {
  'charset': 'utf8',

  'read': function (arg) {
    var deferred = q.defer();
    var charset  = file.charset;
    var link     = arg;

    fs.readFile(link, charset, function (err, data) {
      if (err)
        deferred.reject(err);
      if (data)
        deferred.resolve(data);
    });
    return (deferred.promise);
  }
};
