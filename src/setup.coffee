isMobileBrowser = ->
  navigator.userAgent.match(/Android/i) or
  navigator.userAgent.match(/webOS/i) or
  navigator.userAgent.match(/iPhone/i) or
  navigator.userAgent.match(/iPad/i) or
  navigator.userAgent.match(/iPod/i) or
  navigator.userAgent.match(/BlackBerry/i) or
  navigator.userAgent.match(/Windows Phone/i)

window.showUnsupportedBrowserMessages = ->
  if isMobileBrowser()
    $('#messages').slideDown()
    $('#mobile-device-warning').slideDown()
  else if isIE
    $('#messages').slideDown()
    $('#ie-warning').slideDown()
    $('#ie-let-me-try').click(->
      $('#messages').slideUp()
    )

