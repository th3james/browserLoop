window.Backbone ||= {}

# Acts as the timer of the loops
class window.Clock
  constructor: ->
    #@loopTime = 2286
    @loopTime = 2286*4

  play: =>
    Backbone.trigger('tick')
    setTimeout(@play, @loopTime)
