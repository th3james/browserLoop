window.Backbone ||= {}
window.Backbone.Views ||= {}

class Backbone.Views.LoopView extends Backbone.View
  template: JST['loop']
  controlsTemplate: JST['loop-controls']
  tagName: 'li'

  events:
    'click .play': 'play'
    'click .stop': 'stop'

  initialize: (options) ->
    @model = options.model

    @playing = false
    @listening = false
    @first = true
    @isReadyToPlay = false
    @renderedAudioTags = false

  render: =>
    @renderAudioTags() unless @renderedAudioTags
    @renderControls()

    return @

  renderAudioTags: ->
    @$el.html(@template(@model.toJSON()))
    @buffer1 = this.$el.find("[data-role='first']")[0]
    @buffer1.addEventListener('loadeddata',@checkReadyToPlay)
    @buffer2 = this.$el.find("[data-role='buffer']")[0]
    @buffer2.addEventListener('loadeddata',@checkReadyToPlay)

    @renderedAudioTags = true

  renderControls: ->
    @$el.find('.controls').html(@controlsTemplate(playing: @playing))

  play: =>
    @playing = true
    @startListeningToClock()
    @render()

  stop: =>
    @playing = false
    @stopListeningToClock()
    @buffer1.pause()
    @buffer2.pause()
    @render()

  checkReadyToPlay: =>
    if !@isReadyToPlay and @buffer1? and @buffer2?
      console.log "buffer1 readyState #{@buffer1.readyState}"
      console.log "buffer2 readyState #{@buffer2.readyState}"
      @isReadyToPlay = (@buffer1.readyState > 1 and @buffer2.readyState > 1)
      console.log "set is ready to #{@isReadyToPlay}"
    return @isReadyToPlay

  loop: =>
    if @isReadyToPlay
      if (@first)
        startClip = @buffer1
        stopClip = @buffer2
      else
        startClip = @buffer2
        stopClip = @buffer1

      startClip.currentTime = 110
      startClip.play()

      setTimeout(->
        stopClip.pause()
        stopClip.currentTime = 110
      , window.LOOP_OVERLAP_MS)
      @first = !@first

  startListeningToClock: ->
    Backbone.on('tick', @loop)
    @listening = true
  
  stopListeningToClock: ->
    Backbone.off('tick', @loop)
    @listening = false

  onClose: ->
    @stopListeningToClock()
