window.Backbone ||= {}
window.Backbone.Views ||= {}

class Backbone.Views.LoopView extends Backbone.View
  template: Handlebars.templates['loop.hbs']
  controlsTemplate: Handlebars.templates['loop-controls.hbs']
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
    @model.on('change:volume', @setVolumeFromModel)

  render: =>
    @renderAudioTags() unless @renderedAudioTags
    @renderControls()

    return @

  renderAudioTags: ->
    @$el.html(@template(@model.toJSON()))
    @buffer1 = this.$el.find("[data-role='first']")[0]
    @buffer1.load()
    @buffer1.addEventListener('loadeddata',@checkReadyToPlay)
    @buffer2 = this.$el.find("[data-role='buffer']")[0]
    @buffer2.load()
    @buffer2.addEventListener('loadeddata',@checkReadyToPlay)

    @setVolumeFromModel()

    @renderedAudioTags = true

  renderControls: ->
    if @isReadyToPlay
      @$el.find('.controls').html(@controlsTemplate(playing: @model.get('playing')))
    else
      @$el.find('.controls').html('<p>Loading loop...</p>')

  onPlayStateChange: =>
    if @model.get('playing')
      @play()
      
  setVolumeFromModel: =>
    volume = @model.get('volume')
    @buffer1.volume = volume
    @buffer2.volume = volume

  setPlaying: ->
    @model.trigger('requestTrackStop')
    @model.set('playing', true)

  setStopped: ->
    @model.set('playing', false)

  play: ->
    @startListeningToClock()
    @render()

  stop: ->
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
          @buffer1.play()
          stopFunction = @stopBuffer2
        else
          @buffer2.play()
          stopFunction = @stopBuffer1

        setTimeout(stopFunction, window.LOOP_OVERLAP_MS)
        @first = !@first

  stopBuffer1: =>
    @buffer1.pause()
    @buffer1.load()

  stopBuffer2: =>
    @buffer2.pause()
    @buffer2.load()

  shouldRestartOnTick: (tick)->
    ticksPlayed = tick - @startedAtTick
    ticksPlayed%@model.get('length') == 0

  startListeningToClock: ->
    unless @listening
      Backbone.on('tick', @loop)
      @listening = true
    @startedAtTick = undefined
  
  stopListeningToClock: ->
    Backbone.off('tick', @loop)
    @listening = false

  onClose: ->
    @stopListeningToClock()
