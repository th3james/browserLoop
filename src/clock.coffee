window.Backbone ||= {}

# Acts as the timer of the loops
class window.Clock
  constructor: ->
    @loopTime = 2286

  play: =>
    Backbone.trigger('tick')
    setTimeout(@play, @loopTime)
