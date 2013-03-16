window.JST ||= {}

window.JST['loop-controls'] = _.template("""
  <% if (playing) { %>
    <button class='stop'>Stop</button>
  <% } else { %>
    <button class='play'>Play</button
  <% }%>
""")
