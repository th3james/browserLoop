window.Backbone ||= {}
window.Backbone.Controllers ||= {}

class Backbone.Controllers.MainController extends Backbone.Diorama.Controller
  constructor: ->
    # App entry point
    # This a fairly sparse controller, since we only have one state.
    BrowserLoop.createTrackViews()
    BrowserLoop.buildSomeSceneViews(5)
    
    @setupGlobalControlBindings()

    @start()

  start: ->
    # Start the clock
    theClock = new Clock()
    theClock.play()

  setupGlobalControlBindings: ->
    $('#loop-overlay').val(BrowserLoop.LOOP_OVERLAP_MS)
    $('#loop-overlay-amount').html(BrowserLoop.LOOP_OVERLAP_MS)
    $('#loop-overlay').on('change', BrowserLoop.updateOverlay)
    $('#stop-all').click(BrowserLoop.stopAllClips)
