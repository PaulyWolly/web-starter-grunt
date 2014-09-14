# Marionette, Requirejs, Bower, Grunt SCAFFOLDING for SPA

#### Libs
1. Marionette;
2. Backbone:
 - Backbone Babysitter;
 - Backbone Eventbinder;
 - Backbone WREQR;
 - Backbone Local Storage;
 - Backbone Relational;
 - Backbone Syphon;
3. jQuery;
4. Underscore;
5. Bootstrap SASS;
6. html5shiv;
7. Respond;
8. Rivets;
9. Requirejs:
 - async;
 - font;
 - goog;
 - image;
 - json;
 - mdown;
 - noext;
 - text;
 - domReady;
 - Google Maps;
10. jQuery Lazy Load;
11. jQuery Owl Carousel;
12. jQuery Placeholder;
13. Modernizr;
14. Moment;
15. Pace;
16. WOW;
17. EJS;
18. Animate CSS.


#### Grunt watchers
1. CoffeeScript
2. SASS
3. EJS templates
4. HTML files

#### The production versions stored:
optimized version for css file:
```http
/production/app/assets/stylesheets/main.css
```
optimized version for requirejs file:
```http
/production/app/assets/javascripts/require_main.js
```

#### Quick start for deploying

Install node js packages:

```bash
npm install
```

Install bower packages:
```bash
bower install
```

Run node server with watcher:
```bash
grunt
```

Create development version:
```bash
grunt development
```

Create production version:
```bash
grunt production
```
