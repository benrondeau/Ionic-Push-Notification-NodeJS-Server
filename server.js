// Dependencies
var http = require('http');
var querystring = require('querystring');

module.exports = function (credentials, notification){
  return new Promise(function(resolve, reject){

    // Serialize notification into a query string. See docs @ https://nodejs.org/api/querystring.html#querystring_querystring_stringify_obj_sep_eq_options, Node.js v0.12.1
    var postData = querystring.stringify(notification);

    // Object that defines http.request(). See docs @ https://nodejs.org/api/http.html#http_http_request_options_callback, Node.js v0.12.1
    var options = {
      hostname: 'push.ionic.io',
      port: 80,
      path: '/api/v1/push',
      method: 'POST',
      headers: {
        "Authorization": "Basic " + new Buffer(credentials.IonicApplicationAPIsecret + ":").toString("base64"),
        "Content-Type" : "application/json",
        "X-Ionic-Application-Id" : credentials.IonicApplicationID
      }
    };

  // HTTP POST request. See docs @ https://nodejs.org/api/http.html#http_http_request_options_callback, Node.js v0.12.1
    var req = http.request(options, function(res) {
      console.log('STATUS: ' + res.statusCode);
      console.log('HEADERS: ' + JSON.stringify(res.headers));
      res.setEncoding('utf8');
      var responseBody = '';
      res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
        responseBody = responseBody + chunk;
      });
      res.on('end', function () {
        resolve(JSON.parse(responseBody));
      });
    });

    // Error handling.
    req.on('error', function(e) {
      console.log('problem with request: ' + e.message);
      reject({"result":"error","message":e.message});  
    });

    // Wite data to request body
    req.write(JSON.stringify(notification));
    req.end();
  });
};
