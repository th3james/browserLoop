window.JST ||= {}

window.JST['loop'] = _.template("""
  <h1>Loop View</h1>
  <audio id='1' data-role="first" src="<%= loopUrl %>">
    <p>Your browser does not support the audio element.</p>
  </audio>
  <audio id='2' data-role="buffer" src="<%= loopUrl %>">
    <p>Your browser does not support the audio element.</p>
  </audio>
""")
