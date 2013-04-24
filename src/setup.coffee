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

window.isMobileBrowser = ->
  navigator.userAgent.match(/Android/i) or
  navigator.userAgent.match(/webOS/i) or
  navigator.userAgent.match(/iPhone/i) or
  navigator.userAgent.match(/iPad/i) or
  navigator.userAgent.match(/iPod/i) or
  navigator.userAgent.match(/BlackBerry/i) or
  navigator.userAgent.match(/Windows Phone/i)

