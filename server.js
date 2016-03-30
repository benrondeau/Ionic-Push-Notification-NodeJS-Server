// Dependencies
var https = require('https');
var querystring = require('querystring');

// Push Notification Module
module.exports = function (credentials, notification){

  var postData = querystring.stringify(notification);

  var options = {
	hostname: 'api.ionic.io',
	path: '/push/notifications',
	method: 'POST',
	headers: {
	  "Content-Type" : "application/json",
	  "Authorization": "Bearer " + credentials.IonicApplicationAPItoken
	}
  };

  var req = https.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
  });

  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });

  req.write(JSON.stringify(notification));
  req.end();

};
