# Ionic Push REST API via Node.js

[![NPM version](http://img.shields.io/npm/v/ionic-push-server.svg)](https://www.npmjs.com/package/ionic-push-server)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/benrondeau/Ionic-Push-Notification-NodeJS-Server?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Node.js server using [Ionic Push REST API](http://docs.ionic.io/docs/push-overview) to send push notifications on iOS and Android.

# Requirements
- [NodeJS](https://nodejs.org/)
- Ionic App that is [setup for push notifications](http://docs.ionic.io/docs/push-quick-start)

# Example Usage:

```javascript
var ionicPushServer = require('ionic-push-server');

var credentials = {
    IonicApplicationID : "myID",
    IonicApplicationAPIsecret : "myIonicApiTokent"
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

ionicPushServer(credentials, notification).then(function(){},function(error){});

```

Problems? Join the discussion on [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/benrondeau/Ionic-Push-Notification-NodeJS-Server?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) or file an [issue](https://github.com/benrondeau/Ionic-Push-Notification-NodeJS-Server/issues). Thanks!

## License
[GNU General Public License v3](http://www.gnu.org/licenses/gpl-3.0.txt)
