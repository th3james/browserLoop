window.buildSomeSceneViews = (amount) ->
  for sceneNumber in [0..amount]
    view = new Backbone.Views.ScenePlayView({sceneNumber: sceneNumber})
    $('#scenes').append(view.el)

window.updateOverlay = (e) ->
  window.LOOP_OVERLAP_MS = $(e.target).val()
  $('#loop-overlay-amount').html(window.LOOP_OVERLAP_MS)
