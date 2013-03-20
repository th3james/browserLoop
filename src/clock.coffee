window.Backbone ||= {}

# Acts as the timer of the loops
class window.Clock
  constructor: ->
    @ticks = 0
    @loopTime = 888

  play: =>
    Backbone.trigger('tick', @ticks)
    @ticks = @ticks + 1
    setTimeout(@play, @loopTime)
