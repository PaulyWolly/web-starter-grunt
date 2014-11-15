# web-starter-grunt 0.1.0 [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

#### Assets
- Frameworks: Backbone / Marionette / React
- Task runner: Grunt
- Preprocessors: SASS / Coffee
- Loader: RequireJS
- HTML & CSS Framework: Bootstrap
- Package Manager: Bower
- Methodology: BEM


#### Getting Started

```bash
npm i
grunt
```


#### Build development version:

```bash
grunt development
```


#### Build production version:

```bash
grunt production
```


#### Deploy on server:

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