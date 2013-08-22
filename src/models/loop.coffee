window.Backbone.Models || = {}

class window.Backbone.Models.Loop extends Backbone.Model
  defaults:
    length: 4
    space: false
    playing: false
    volume: 0.5

  initialize: (attributes) ->
    if attributes.fileName?
      @setLoopUrlFromFilename(attributes.fileName)

  setLoopUrlFromFilename: (fileName)->
    if (new Audio()).canPlayType('audio/ogg')
      @set('loopUrl', "audio/ogg/#{fileName}.theora.oga")
    else
      @set('loopUrl', "audio/mp3/#{fileName}.mp3")
