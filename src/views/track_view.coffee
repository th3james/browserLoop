window.Backbone ||= {}
window.Backbone.Views ||= {}

class Backbone.Views.TrackView extends Backbone.Diorama.NestingView
  template: JST['track']

  initialize: (options) ->
    @render()

  render: =>
    @closeSubViews()
    @$el.html(@template(view: @))
    @renderSubViews()

    return @

  onClose: ->
    @closeSubViews()
