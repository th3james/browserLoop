window.BrowserLoop = {}

# Home for functions without a home

BrowserLoop.LOOP_OVERLAP_MS = 43

BrowserLoop.buildSomeSceneViews = (amount) ->
  amount = amount - 1
  for sceneNumber in [0..amount]
    view = new Backbone.Views.ScenePlayView({sceneNumber: sceneNumber})
    $('#scenes').append(view.el)

BrowserLoop.updateOverlay = (e) ->
  BrowserLoop.LOOP_OVERLAP_MS = $(e.target).val()
  $('#loop-overlay-amount').html(BrowserLoop.LOOP_OVERLAP_MS)

BrowserLoop.stopAllClips = ->
  Backbone.trigger('playScene', -1)

BrowserLoop.createTrackViews = ->
  # TODO - This method is kinda evil, this should really be loaded from a JSON route
  drumsLoopCollection = new Backbone.Collections.LoopCollection([
    {name: 'Verse', length: 2, fileName: 'XEVerseDrums'},
    {space: true},
    {name: 'Chorus', fileName: 'XEChorusDrums'},
    {name: 'Middle 8', fileName: 'XEMidDrums'}
  ])
  drums = new Backbone.Views.TrackView(
    name: "Drums"
    collection: drumsLoopCollection
  )
  $("#tracks").append drums.el

  jamesGuitarLoopCollection = new Backbone.Collections.LoopCollection([
    {name: 'Verse', length: 2, fileName: 'XEVrs1James'},
    {name: 'Verse 2', length: 2, fileName: 'XEVrs2James'},
    {name: 'Chorus', length: 2, fileName: 'XEChorusJames'},
    {name: 'Middle 8', length: 2, fileName: 'XEMidJames'}
  ])
  james = new Backbone.Views.TrackView(
    name: "Guitar 1"
    collection: jamesGuitarLoopCollection
  )
  $("#tracks").append james.el

  keysLoopCollection = new Backbone.Collections.LoopCollection([
    {space: true},
    {name: 'Noise', length: 8, fileName: 'XE2ndVerseNoise'},
    {name: 'Chorus', fileName: 'XEChorusKeys'},
    {name: 'Glass', length: 2, fileName: 'XEGlassSmash'},
  ])
  keys = new Backbone.Views.TrackView(
    name: "Synth"
    collection: keysLoopCollection
  )
  $("#tracks").append keys.el

  bassLoopCollection = new Backbone.Collections.LoopCollection([
    {name: 'Verse', length: 16, fileName: 'XEVerseBass'},
    {space: true},
    {name: 'Chorus', length: 16, fileName: 'XEChorusBass'},
    {name: 'Middle8', length: 2, fileName: 'XEMidBass'}
  ])
  bass = new Backbone.Views.TrackView(
    name: "Bass"
    collection: bassLoopCollection
  )
  $("#tracks").append bass.el

  robGuitarCollection = new Backbone.Collections.LoopCollection([
    {name: 'Verse', length: 8, fileName: 'XEVrsRob'},
    {space: true},
    {name: 'Chorus', length: 8, fileName: 'XEChorusRob'},
    {name: 'Chorus 2', length: 8, fileName: 'XEChorusRob3'},
    {name: 'Middle 8', length: 2, fileName: 'XERobMidNoise'}
  ])
  rob = new Backbone.Views.TrackView(
    name: "Guitar 2"
    collection: robGuitarCollection
  )
  $("#tracks").append rob.el

  voxCollection = new Backbone.Collections.LoopCollection([
    {name: 'Verse 1', length: 16, fileName: 'XEVrs1Vox'},
    {name: 'Verse 2', length: 16, fileName: 'XEVrs2Vox'},
    {name: 'Chorus', length: 16, fileName: 'XEChorusVox'},
    {name: 'Verse 3', length: 16, fileName: 'XEVrs3Vox'},
    {name: 'Verse 4', length: 16, fileName: 'XEVrs4Vox'}
  ])
  vox = new Backbone.Views.TrackView(
    name: "Vocals"
    collection: voxCollection
  )
  $("#tracks").append vox.el
