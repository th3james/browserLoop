window.Backbone ||= {}
window.Backbone.Views ||= {}

class Backbone.Views.TrackView extends Backbone.Diorama.NestingView
  template: Handlebars.templates['track.hbs']
  tagName: 'li'

  events:
    "change .volume": "changeVolume"

  initialize: (options) ->
    @loopCollection = options.collection
    @name = options.name
    @render()

  render: =>
    @$el.html(@template(thisView: @, name: @name, loops: @loopCollection.models))
    @attachSubViews()

    return @

  changeVolume: (e) =>
    @volume = $(e.target).val()
    @loopCollection.invoke('set', {volume: @volume/100})

  onClose: ->
    @closeSubViews()
