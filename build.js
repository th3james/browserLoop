var buildify = require('buildify');

buildify()
  .concat(['js/lib/fd-slider.min.js', 'js/lib/diorama.js', 'js/application.js'])
  .uglify()
  .save('js/app.min.js');

buildify()
  .concat(['css/style.css', 'css/range.css'])
  .cssmin()
  .save('css/app.min.css');
