window.Backbone ||= {}
window.Backbone.Views ||= {}

class Backbone.Views.LoopView extends Backbone.View
  template: JST['loop']
  controlsTemplate: JST['loop-controls']
  tagName: 'li'

  events:
    'click .play': 'setPlaying'
    'click .stop': 'setStopped'

  initialize: (options) ->
    @model = options.model

    @first = true
    @isReadyToPlay = false
    @renderedAudioTags = false

    @model.on('change:playing', @onPlayStateChange)

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
    if @isReadyToPlay
      @$el.find('.controls').html(@controlsTemplate(playing: @model.get('playing')))
    else
      @$el.find('.controls').html('<p>Loading loop...</p>')

  onPlayStateChange: =>
    if @model.get('playing')
      @play()

  setPlaying: ->
    @model.trigger('requestTrackStop')
    @model.set('playing', true)

  setStopped: ->
    @model.set('playing', false)

  play: =>
    @startListeningToClock()
    @render()

  stop: =>
    @model.set('playing', false)
    @stopListeningToClock()
    @buffer1.pause()
    @buffer2.pause()
    @render()

  checkReadyToPlay: =>
    if !@isReadyToPlay and @buffer1? and @buffer2?
      @isReadyToPlay = (@buffer1.readyState > 1 and @buffer2.readyState > 1)
    @render()
    return @isReadyToPlay

  loop: (tick) =>
    if @model.get('playing') == false
      @stop()
    else if @isReadyToPlay
      unless @startedAtTick?
        @startedAtTick = tick

      if @shouldRestartOnTick(tick)
        if (@first)
          startClip = @buffer1
          stopClip = @buffer2
        else
          startClip = @buffer2
          stopClip = @buffer1

        startClip.currentTime = 0
        startClip.play()

        setTimeout(->
          stopClip.pause()
          stopClip.currentTime = 0
        , window.LOOP_OVERLAP_MS)
        @first = !@first

  shouldRestartOnTick: (tick)->
    ticksPlayed = tick - @startedAtTick
    ticksPlayed%@model.get('length') == 0

  startListeningToClock: ->
    Backbone.on('tick', @loop)
    @startedAtTick = undefined
  
  stopListeningToClock: ->
    Backbone.off('tick', @loop)

  onClose: ->
    @stopListeningToClock()
