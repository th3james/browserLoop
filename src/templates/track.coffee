window.JST ||= {}

window.JST['track'] = _.template("""
  <h3><%= name %></h3>
  <ul class='loops'>
    <%
      var loop, _i, _len;

      for (_i = 0, _len = loops.length; _i < _len; _i++) {
        loop = loops[_i];
    %>
      <%= view.addSubView(new Backbone.Views.LoopView({model: loop})) %>
    <% } %>
  </ul>
""")
