MyApp = new Backbone.Marionette.Application();

MyApp.addRegions({
  mainRegion: "#list__region"
});

AngryCat = Backbone.Model.extend({});

AngryCats = Backbone.Collection.extend({
  model: AngryCat
});

AngryCatView = Backbone.Marionette.ItemView.extend({
  template: "#product__template",
  tagName: 'div',
  className: 'angry_cat'
});

AngryCatsView = Backbone.Marionette.CompositeView.extend({
  tagName: "div",
  template: "#products__template",
  itemView: AngryCatView,
  appendHtml: function(collectionView, itemView){
    $(collectionView.el).append(itemView.el);
  }
});

MyApp.addInitializer(function(options) {
  var angryCatsView = new AngryCatsView({
    collection: options.cats
  });
  console.log(MyApp)
  MyApp.mainRegion.show(angryCatsView);
});

$(document).ready(function() {
  // Here we create a bunch of models at the same time as the collection.
  var cats = new AngryCats([
    new AngryCat({
      name: 'Wet Cat'
    })
  ]);
  MyApp.start({
    cats: cats
  });
});