window.Backbone ||= {}
window.Backbone.Views ||= {}

class Backbone.Views.LoopView extends Backbone.View
  template: JST['loop']

  initialize: (options) ->
    @loopUrl = options.loopUrl

    @playing = false
    @listening = false
    @first = true
    @isReadyToPlay = false

    @render()
    @play()

  render: =>
    @$el.html(@template(loopUrl: @loopUrl))
    @buffer1 = this.$el.find("[data-role='first']")[0]
    @buffer1.addEventListener('loadeddata',@checkReadyToPlay)
    @buffer2 = this.$el.find("[data-role='buffer']")[0]
    @buffer2.addEventListener('loadeddata',@checkReadyToPlay)
    return @

  play: =>
    @playing = true
    @startListeningToClock()

  stop: =>
    @playing = false
    @stopListeningToClock()

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

      startClip.currentTime = 120
      startClip.play()

      setTimeout(->
        stopClip.pause()
        stopClip.currentTime = 120
      , 500)
      @first = !@first

  startListeningToClock: ->
    Backbone.on('tick', @loop)
    @listening = true
  
  stopListeningToClock: ->
    Backbone.off('tick', @loop)
    @listening = false

  onClose: ->
    @stopListeningToClock()
