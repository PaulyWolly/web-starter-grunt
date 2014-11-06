# Marionette, Requirejs, Bower, Grunt, SASS, REM


#### GET STARTED
```bash
npm install -g grunt-cli
```
```bash
npm install -g bower
```
```bash
npm install
```
```bash
bower install
```
```bash
grunt
```
HTTP server:
```bash
http://0.0.0.0:3000
```

Build development version:
```bash
grunt development
```
Build production version:
```bash
grunt production
```
Live reload for Chrome:
```http
https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
```

Deploy on server:
```bash
grunt deploy
```

```json
{
  "staging": {
    "host": "192.168.0.1",
    "username": "user",
    "password": "pass",
    "port": "22",
    "path": "cd /path/to/dir/"
  },
  "production": {
    "host": "192.168.0.1",
    "username": "user",
    "password": "pass",
    "port": "22",
    "path": "cd /path/to/dir/"
  }
}
```

