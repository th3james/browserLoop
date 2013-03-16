window.Backbone ||= {}
window.Backbone.Views ||= {}

class Backbone.Views.LoopView extends Backbone.View
  template: JST['loop']

  initialize: (options) ->
    @render()

  render: =>
    @$el.html(@template())

  onClose: ->
