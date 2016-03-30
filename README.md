# Ionic Push REST API via Node.js

[![NPM version](http://img.shields.io/npm/v/ionic-push-server.svg)](https://www.npmjs.com/package/ionic-push-server)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/benrondeau/Ionic-Push-Notification-NodeJS-Server?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Node.js server using [Ionic Push REST API](http://docs.ionic.io/docs/push-overview) to send push notifications on iOS and Android.

See [Ionic's REST API documentation](http://docs.ionic.io/v2.0.0-beta/docs/push-sending-push#section-basic-api-usage) for more info on creating/sending push notifications.

# Requirements
- [Node.js](https://nodejs.org/)
- Ionic App that is [setup for push notifications](http://docs.ionic.io/docs/push-quick-start)

# Example Usage:

```javascript
var ionicPushServer = require('ionic-push-server');

var credentials = {
    IonicApplicationID : "myID",
    IonicApplicationAPItoken : "myIonicAPItoken"
};

var notification = {
  "tokens": ["your", "device", "tokens"],
  "profile": "my-security-profile",
  "notification": {
    "title": "Hi",
    "message": "Hello world!",
    "android": {
      "title": "Hey",
      "message": "Hello Android!"
    },
    "ios": {
      "title": "Howdy",
      "message": "Hello iOS!"
    } 
};

ionicPushServer(credentials, notification);

```

Problems? Join the discussion on [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/benrondeau/Ionic-Push-Notification-NodeJS-Server?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) or file an [issue](https://github.com/benrondeau/Ionic-Push-Notification-NodeJS-Server/issues). Thanks!

## License
[GNU General Public License v3](http://www.gnu.org/licenses/gpl-3.0.txt)
