class Product extends Backbone.Model
  defaults:
    name: ''
  initialize: ->
    console.log 'Init model'

class Products extends Backbone.Collection
  initialize: ->
    console.log 'Init collection'

class ProductView extends Backbone.Marionette.ItemView
  template: '#product__template'
  tagName: 'div'
  initialize: ->
    console.log 'Init Product view'

class ProductsView extends Backbone.Marionette.CompositeView
  template: '#products__template'
  tagName: 'div'
  itemView: ProductView
  initialize: ->
    console.log 'Init Products view'
  appendHtml = (collectionView, itemView) ->
    $(collectionView).append(itemView.el)

List = new Backbone.Marionette.Application
List.addRegions
  mainRegion: '#list__region'
List.addInitializer (data) ->
  productView = new ProductsView
    collection: data.products
  List.mainRegion.show productView

$ ->
  products = new Products([
    new Product
      name: 'Iphone'
    new Product
      name: 'Samsung'
    new Product
      name: 'Asus'
  ])
  List.start
    products: products