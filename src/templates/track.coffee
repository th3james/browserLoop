window.JST ||= {}

window.JST['track'] = _.template("""
  <h1>Track</h1>
  <%= view.addSubView(new Backbone.Views.ChildView()) %>
""")
