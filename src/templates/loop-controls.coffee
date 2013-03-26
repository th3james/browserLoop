window.JST ||= {}

window.JST['loop-controls'] = _.template("""
  <% if (playing) { %>
    <button class='stop'><img src='img/stop-button.png'/></button>
  <% } else { %>
    <button class='play'><img src='img/play-button.png'/></button>
  <% }%>
""")
