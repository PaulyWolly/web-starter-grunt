rivets.configure
  prefix: 'bind'

rivets.adapters[':'] =

  subscribe: (obj, keypath, callback) ->
    # Subscribes to the model->attribute change event
    obj.on "change:" + keypath, callback

  unsubscribe: (obj, keypath, callback) ->
    # Unsubscribes from the model->attribute change event
    # Used when View.unbind() is called
    obj.off "change:" + keypath, callback

  read: (obj, keypath) ->
    # Read a value from a model based on the watched key
    obj.get keypath

  publish: (obj, keypath, value) ->
    # Write a value to a model based on a watched key
    obj.set keypath, value