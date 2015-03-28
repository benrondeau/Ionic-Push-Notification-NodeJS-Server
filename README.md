# Ionic Push REST API for iOS

NodeJS server using [Ionic Push REST API](http://docs.ionic.io/push/send/) to send push notifications on iOS.

# Requirements
- [NodeJS](https://nodejs.org/)
- Ionic App that is [setup for push notifications](http://docs.ionic.io/push/quick-start/)

# Getting Started
1. Download this respository and open in an IDE or text editor.

Example node server.js file:

```javascript
var ionicPushServer = require('ionic-push-server');

var options = {
    IonicApplicationID = "",
    IonicApplicationAPIsecret = "",
    deviceTokens = [""]
}
var notification = {};

ionicPushServer(options, notification);

```
