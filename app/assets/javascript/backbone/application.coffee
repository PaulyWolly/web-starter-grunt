class ProductModel extends Backbone.Model
  defaults:
    name: 'Product'

class ProductsCollection extends Backbone.Collection
  model: ProductModel

class ProductView extends Marionette.ItemView
  model: ProductModel
  template: '#product__template'
  className: 'item'
  tagName: 'tr'
  onRender: ->
    rivets.bind @el,
      model: @model

class ProductsView extends Marionette.CollectionView
  itemView: ProductView
  template: '#products__template'
  className: 'table listItems'
  tagName: 'table'
  appendHtml = (collectionView, itemView) ->
    $(collectionView).append itemView


App = new Backbone.Marionette.Application
App.addRegions
  mainRegion: '#main__region'

$ ->
  App.start

  window.getProductsCollection = new ProductsCollection

  getProductsCollection.add
    name: 'Product 1'

  getProductsCollection.add
    name: 'Product 2'

  getProductsCollection.add
    name: 'Product 3'

  getProductsView = new ProductsView
    collection: window.getProductsCollection

  App.mainRegion.show getProductsView
