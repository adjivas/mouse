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
}
