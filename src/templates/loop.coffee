window.JST ||= {}

window.JST['loop'] = _.template("""
  <h1>Loop View</h1>
  <audio data-role="first" src="<%= loopUrl %>">
    <p>Your browser does not support the audio element.</p>
  </audio>
  <audio data-role="buffer" src="<%= loopUrl %>">
    <p>Your browser does not support the audio element.</p>
  </audio>
""")
