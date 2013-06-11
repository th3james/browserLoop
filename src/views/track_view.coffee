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
    @closeSubViews()
    Handlebars.registerHelper 'debugger', (a,b,c)->
      debugger

    @$el.html(@template(thisView: @, name: @name, loops: @loopCollection.models))
    @renderSubViews()

    return @

  changeVolume: (e) =>
    @volume = $(e.target).val()
    @loopCollection.invoke('set', {volume: @volume/100})

  onClose: ->
    @closeSubViews()
