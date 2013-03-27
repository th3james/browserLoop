window.Backbone ||= {}
window.Backbone.Collections ||= {}

class Backbone.Collections.LoopCollection extends Backbone.Collection
  model: Backbone.Models.Loop
  
  initialize: ->
    @on('requestTrackStop', @stopLoops)
    Backbone.on('playScene', @playLoop)

  stopLoops: =>
    @each((model) ->
      model.set('playing', false)
    )

  playLoop: (index) =>
    @stopLoops()
    loopToPlay = @models[index]
    if loopToPlay?
      loopToPlay.set('playing', true)
