window.JST ||= {}

window.JST['track'] = _.template("""
  <h3><%= name %></h3>
  <div class='volume-strip'>
    <input class='volume' type='range' min='0' max='100'/>
    <img src='img/sound_low.png'/>
    <img class='right' src='img/sound_high.png'/>
  </div>
  <ul class='loops'>
    <%
      var loop, _i, _len;

      for (_i = 0, _len = loops.length; _i < _len; _i++) {
        loop = loops[_i];
        if (loop.get('space')) {
    %>
        <li></li>
      <% } else { %>
        <%= view.addSubView(new Backbone.Views.LoopView({model: loop})) %>
    <%  
        }
      }
    %>
  </ul>
""")
