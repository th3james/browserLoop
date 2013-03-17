window.Backbone ||= {}
window.Backbone.Views ||= {}

class Backbone.Views.TrackView extends Backbone.Diorama.NestingView
  template: JST['track']
  tagName: 'li'

  initialize: (options) ->
    @loopCollection = options.collection
    @name = options.name
    @render()

  render: =>
    @closeSubViews()
    @$el.html(@template(view: @, name: @name, loops: @loopCollection.models))
    @renderSubViews()

    return @

  onClose: ->
    @closeSubViews()
