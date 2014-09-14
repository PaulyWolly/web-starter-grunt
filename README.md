# Marionette, Requirejs, Bower, Grunt SCAFFOLDING APP for SAP


#### Grunt watchers
1. CoffeeScript
2. SASS
3. Templates
4. HTML files

#### The production versions stored:
1. optimized version for css file:
```http
/production/app/assets/stylesheets/main.js
```
2. optimized version for requirejs file:
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
