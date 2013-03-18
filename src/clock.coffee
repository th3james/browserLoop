window.Backbone ||= {}

# Acts as the timer of the loops
class window.Clock
  constructor: ->
    @ticks = 0
    @loopTime = 2286

  play: =>
    Backbone.trigger('tick', @ticks)
    @ticks = @ticks + 1
    setTimeout(@play, @loopTime)
