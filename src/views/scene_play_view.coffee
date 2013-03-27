window.Backbone ||= {}
window.Backbone.Views ||= {}

class Backbone.Views.ScenePlayView extends Backbone.View
  template: JST['scene_play']

  events:
    'click .play': 'playScene'

  initialize: (options) ->
    @sceneNumber = options.sceneNumber
    @render()

  render: ->
    @$el.html(@template())
    return @

  playScene: ->
    Backbone.trigger('playScene', @sceneNumber)

  onClose: ->
    
