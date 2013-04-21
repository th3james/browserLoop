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
      console.log "using ogg"
      @set('loopUrl', "audio/ogg/#{fileName}.theora.ogv")
    else
      console.log "using mp3"
      @set('loopUrl', "audio/mp3/#{fileName}.mp3")
