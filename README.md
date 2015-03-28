# Ionic Push REST API for iOS

[![Join the chat at https://gitter.im/benrondeau/Ionic-Push-Notification-NodeJS-Server](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/benrondeau/Ionic-Push-Notification-NodeJS-Server?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![NPM version](http://img.shields.io/npm/v/ionic-push-server.svg)](https://www.npmjs.com/package/ionic-push-server)

NodeJS server using [Ionic Push REST API](http://docs.ionic.io/push/send/) to send push notifications on iOS. Based on ionic@1.4.0-alpha.6 release.

# Requirements
- [NodeJS](https://nodejs.org/)
- Ionic App that is [setup for push notifications](http://docs.ionic.io/push/quick-start/)

# Example Usage:

```javascript
var ionicPushServer = require('ionic-push-server');

var credentials = {
    IonicApplicationID : "myID",
    IonicApplicationAPIsecret : "myAPIsecret"
};

var notification = {
  "tokens":["myDeviceToken"],
  "notification":{
    "alert":"Hi from Ionic Push Service!",
    "ios":{
      "badge":1,
      "sound":"chime.aiff",
      "expiry": 1423238641,
      "priority": 10,
      "contentAvailable": true,
      "payload":{
        "key1":"value",
        "key2":"value"
      }
    }
  } 
};

ionicPushServer(credentials, notification);

```

Problems? Please file an [issue](https://github.com/benrondeau/Ionic-Push-Notification-NodeJS-Server/issues). Thanks!
