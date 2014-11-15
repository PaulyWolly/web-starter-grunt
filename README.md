# web-starter-grunt 0.1.0 [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

## Marionette, Requirejs, React, Bower, Grunt, SASS, REM

## Getting Started
```bash
npm i
grunt
```

## Build development version:
```bash
grunt development
```
## Build production version:
```bash
grunt production
```

## Deploy on server:
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