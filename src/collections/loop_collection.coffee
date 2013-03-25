window.Backbone ||= {}
window.Backbone.Collections ||= {}

class Backbone.Collections.LoopCollection extends Backbone.Collection
  model: Backbone.Models.Loop
  
  initialize: ->
    @on('requestTrackStop', @stopLoops)

  stopLoops: =>
    @each((model) ->
      model.set('playing', false)
    )
