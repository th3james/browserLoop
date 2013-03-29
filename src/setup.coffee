window.buildSomeSceneViews = (amount) ->
  amount = amount - 1
  for sceneNumber in [0..amount]
    view = new Backbone.Views.ScenePlayView({sceneNumber: sceneNumber})
    $('#scenes').append(view.el)

window.updateOverlay = (e) ->
  window.LOOP_OVERLAP_MS = $(e.target).val()
  $('#loop-overlay-amount').html(window.LOOP_OVERLAP_MS)

window.stopAllClips = ->
  Backbone.trigger('playScene', -1)
