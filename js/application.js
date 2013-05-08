(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['track.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.space), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n      <li></li>\n    ";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n      ";
  options = {hash:{
    'model': (depth0)
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.subView),stack1 ? stack1.call(depth0, "LoopView", options) : helperMissing.call(depth0, "subView", "LoopView", options)))
    + "\n    ";
  return buffer;
  }

  buffer += "<h3>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n<div class='volume-strip'>\n  <input class='volume' type='range' min='0' max='100'/>\n  <img src='img/sound_low.png'/>\n  <img class='right' src='img/sound_high.png'/>\n</div>\n<ul class='loops'>\n  ";
  stack1 = helpers.each.call(depth0, depth0.loops, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  });
templates['loop.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<audio data-role=\"first\" src=\"";
  if (stack1 = helpers.loopUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.loopUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n  <p>Your browser does not support the audio element.</p>\n</audio>\n<audio data-role=\"buffer\" src=\"";
  if (stack1 = helpers.loopUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.loopUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n  <p>Your browser does not support the audio element.</p>\n</audio>\n<div class='controls'></div>\n<h4>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n";
  return buffer;
  });
templates['loop-controls.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n  <button class='stop'><img src='img/stop-button.png'/></button>\n";
  }

function program3(depth0,data) {
  
  
  return "\n  <button class='play'><img src='img/play-button.png'/></button>\n";
  }

  stack1 = helpers['if'].call(depth0, depth0.playing, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['scene_play.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<button class='play'><img src='img/play-button.png'/></button>\n";
  });
})();


(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['track.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.space), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n      <li></li>\n    ";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n      ";
  options = {hash:{
    'model': (depth0)
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.subView),stack1 ? stack1.call(depth0, "LoopView", options) : helperMissing.call(depth0, "subView", "LoopView", options)))
    + "\n    ";
  return buffer;
  }

  buffer += "<h3>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n<div class='volume-strip'>\n  <input class='volume' type='range' min='0' max='100'/>\n  <img src='img/sound_low.png'/>\n  <img class='right' src='img/sound_high.png'/>\n</div>\n<ul class='loops'>\n  ";
  stack1 = helpers.each.call(depth0, depth0.loops, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  });
templates['loop.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<audio data-role=\"first\" src=\"";
  if (stack1 = helpers.loopUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.loopUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n  <p>Your browser does not support the audio element.</p>\n</audio>\n<audio data-role=\"buffer\" src=\"";
  if (stack1 = helpers.loopUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.loopUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n  <p>Your browser does not support the audio element.</p>\n</audio>\n<div class='controls'></div>\n<h4>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n";
  return buffer;
  });
templates['loop-controls.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n  <button class='stop'><img src='img/stop-button.png'/></button>\n";
  }

function program3(depth0,data) {
  
  
  return "\n  <button class='play'><img src='img/play-button.png'/></button>\n";
  }

  stack1 = helpers['if'].call(depth0, depth0.playing, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['scene_play.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<button class='play'><img src='img/play-button.png'/></button>\n";
  });
})();


// Generated by CoffeeScript 1.6.2
(function() {
  var _base, _base1, _base2, _base3, _base4, _base5, _base6, _base7, _base8, _base9, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  (_base = window.Backbone).Models || (_base.Models = {});

  window.Backbone.Models.Loop = (function(_super) {
    __extends(Loop, _super);

    function Loop() {
      _ref = Loop.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Loop.prototype.defaults = {
      length: 4,
      space: false,
      playing: false,
      volume: 0.5
    };

    Loop.prototype.initialize = function(attributes) {
      if (attributes.fileName != null) {
        return this.setLoopUrlFromFilename(attributes.fileName);
      }
    };

    Loop.prototype.setLoopUrlFromFilename = function(fileName) {
      if ((new Audio()).canPlayType('audio/ogg')) {
        console.log("using ogg");
        return this.set('loopUrl', "audio/ogg/" + fileName + ".theora.oga");
      } else {
        console.log("using mp3");
        return this.set('loopUrl', "audio/mp3/" + fileName + ".mp3");
      }
    };

    return Loop;

  })(Backbone.Model);

  window.Backbone || (window.Backbone = {});

  (_base1 = window.Backbone).Collections || (_base1.Collections = {});

  Backbone.Collections.LoopCollection = (function(_super) {
    __extends(LoopCollection, _super);

    function LoopCollection() {
      this.playLoop = __bind(this.playLoop, this);
      this.stopLoops = __bind(this.stopLoops, this);      _ref1 = LoopCollection.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    LoopCollection.prototype.model = Backbone.Models.Loop;

    LoopCollection.prototype.initialize = function() {
      this.on('requestTrackStop', this.stopLoops);
      return Backbone.on('playScene', this.playLoop);
    };

    LoopCollection.prototype.stopLoops = function() {
      return this.each(function(model) {
        return model.set('playing', false);
      });
    };

    LoopCollection.prototype.playLoop = function(index) {
      var loopToPlay;

      this.stopLoops();
      loopToPlay = this.models[index];
      if (loopToPlay != null) {
        return loopToPlay.set('playing', true);
      }
    };

    return LoopCollection;

  })(Backbone.Collection);

  window.Backbone || (window.Backbone = {});

  (_base2 = window.Backbone).Views || (_base2.Views = {});

  Backbone.Views.TrackView = (function(_super) {
    __extends(TrackView, _super);

    function TrackView() {
      this.changeVolume = __bind(this.changeVolume, this);
      this.render = __bind(this.render, this);      _ref2 = TrackView.__super__.constructor.apply(this, arguments);
      return _ref2;
    }

    TrackView.prototype.template = Handlebars.templates['track.hbs'];

    TrackView.prototype.tagName = 'li';

    TrackView.prototype.events = {
      "change .volume": "changeVolume"
    };

    TrackView.prototype.initialize = function(options) {
      this.loopCollection = options.collection;
      this.name = options.name;
      return this.render();
    };

    TrackView.prototype.render = function() {
      this.closeSubViews();
      this.$el.html(this.template({
        view: this,
        name: this.name,
        loops: this.loopCollection.models
      }));
      this.renderSubViews();
      return this;
    };

    TrackView.prototype.changeVolume = function(e) {
      this.volume = $(e.target).val();
      return this.loopCollection.invoke('set', {
        volume: this.volume / 100
      });
    };

    TrackView.prototype.onClose = function() {
      return this.closeSubViews();
    };

    return TrackView;

  })(Backbone.Diorama.NestingView);

  window.Backbone || (window.Backbone = {});

  (_base3 = window.Backbone).Views || (_base3.Views = {});

  Backbone.Views.LoopView = (function(_super) {
    __extends(LoopView, _super);

    function LoopView() {
      this.stopBuffer2 = __bind(this.stopBuffer2, this);
      this.stopBuffer1 = __bind(this.stopBuffer1, this);
      this.loop = __bind(this.loop, this);
      this.checkReadyToPlay = __bind(this.checkReadyToPlay, this);
      this.setVolumeFromModel = __bind(this.setVolumeFromModel, this);
      this.onPlayStateChange = __bind(this.onPlayStateChange, this);
      this.render = __bind(this.render, this);      _ref3 = LoopView.__super__.constructor.apply(this, arguments);
      return _ref3;
    }

    LoopView.prototype.template = Handlebars.templates['loop.hbs'];

    LoopView.prototype.controlsTemplate = Handlebars.templates['loop-controls.hbs'];

    LoopView.prototype.tagName = 'li';

    LoopView.prototype.events = {
      'click .play': 'setPlaying',
      'click .stop': 'setStopped'
    };

    LoopView.prototype.initialize = function(options) {
      this.model = options.model;
      this.first = true;
      this.isReadyToPlay = false;
      this.renderedAudioTags = false;
      this.model.on('change:playing', this.onPlayStateChange);
      return this.model.on('change:volume', this.setVolumeFromModel);
    };

    LoopView.prototype.render = function() {
      if (!this.renderedAudioTags) {
        this.renderAudioTags();
      }
      this.renderControls();
      return this;
    };

    LoopView.prototype.renderAudioTags = function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.buffer1 = this.$el.find("[data-role='first']")[0];
      this.buffer1.load();
      this.buffer1.addEventListener('loadeddata', this.checkReadyToPlay);
      this.buffer2 = this.$el.find("[data-role='buffer']")[0];
      this.buffer2.load();
      this.buffer2.addEventListener('loadeddata', this.checkReadyToPlay);
      this.setVolumeFromModel();
      return this.renderedAudioTags = true;
    };

    LoopView.prototype.renderControls = function() {
      if (this.isReadyToPlay) {
        return this.$el.find('.controls').html(this.controlsTemplate({
          playing: this.model.get('playing')
        }));
      } else {
        return this.$el.find('.controls').html('<p>Loading loop...</p>');
      }
    };

    LoopView.prototype.onPlayStateChange = function() {
      if (this.model.get('playing')) {
        return this.play();
      }
    };

    LoopView.prototype.setVolumeFromModel = function() {
      var volume;

      volume = this.model.get('volume');
      this.buffer1.volume = volume;
      return this.buffer2.volume = volume;
    };

    LoopView.prototype.setPlaying = function() {
      this.model.trigger('requestTrackStop');
      return this.model.set('playing', true);
    };

    LoopView.prototype.setStopped = function() {
      return this.model.set('playing', false);
    };

    LoopView.prototype.play = function() {
      this.startListeningToClock();
      return this.render();
    };

    LoopView.prototype.stop = function() {
      this.model.set('playing', false);
      this.stopListeningToClock();
      this.buffer1.pause();
      this.buffer2.pause();
      return this.render();
    };

    LoopView.prototype.checkReadyToPlay = function() {
      if (!this.isReadyToPlay && (this.buffer1 != null) && (this.buffer2 != null)) {
        this.isReadyToPlay = this.buffer1.readyState > 1 && this.buffer2.readyState > 1;
      }
      this.render();
      return this.isReadyToPlay;
    };

    LoopView.prototype.loop = function(tick) {
      var stopFunction;

      if (this.model.get('playing') === false) {
        return this.stop();
      } else if (this.isReadyToPlay) {
        if (this.startedAtTick == null) {
          this.startedAtTick = tick;
        }
        if (this.shouldRestartOnTick(tick)) {
          if (this.first) {
            this.buffer1.play();
            stopFunction = this.stopBuffer2;
          } else {
            this.buffer2.play();
            stopFunction = this.stopBuffer1;
          }
          setTimeout(stopFunction, window.LOOP_OVERLAP_MS);
          return this.first = !this.first;
        }
      }
    };

    LoopView.prototype.stopBuffer1 = function() {
      this.buffer1.pause();
      return this.buffer1.load();
    };

    LoopView.prototype.stopBuffer2 = function() {
      this.buffer2.pause();
      return this.buffer2.load();
    };

    LoopView.prototype.shouldRestartOnTick = function(tick) {
      var ticksPlayed;

      ticksPlayed = tick - this.startedAtTick;
      return ticksPlayed % this.model.get('length') === 0;
    };

    LoopView.prototype.startListeningToClock = function() {
      if (!this.listening) {
        Backbone.on('tick', this.loop);
        this.listening = true;
      }
      return this.startedAtTick = void 0;
    };

    LoopView.prototype.stopListeningToClock = function() {
      Backbone.off('tick', this.loop);
      return this.listening = false;
    };

    LoopView.prototype.onClose = function() {
      return this.stopListeningToClock();
    };

    return LoopView;

  })(Backbone.View);

  window.Backbone || (window.Backbone = {});

  (_base4 = window.Backbone).Views || (_base4.Views = {});

  Backbone.Views.ScenePlayView = (function(_super) {
    __extends(ScenePlayView, _super);

    function ScenePlayView() {
      _ref4 = ScenePlayView.__super__.constructor.apply(this, arguments);
      return _ref4;
    }

    ScenePlayView.prototype.template = Handlebars.templates['scene_play.hbs'];

    ScenePlayView.prototype.tagName = 'li';

    ScenePlayView.prototype.events = {
      'click .play': 'playScene'
    };

    ScenePlayView.prototype.initialize = function(options) {
      this.sceneNumber = options.sceneNumber;
      return this.render();
    };

    ScenePlayView.prototype.render = function() {
      this.$el.html(this.template());
      return this;
    };

    ScenePlayView.prototype.playScene = function() {
      return Backbone.trigger('playScene', this.sceneNumber);
    };

    ScenePlayView.prototype.onClose = function() {};

    return ScenePlayView;

  })(Backbone.View);

  window.Clock = (function() {
    function Clock() {
      this.play = __bind(this.play, this);      this.ticks = 0;
      this.loopTime = 888;
    }

    Clock.prototype.play = function() {
      Backbone.trigger('tick', this.ticks);
      this.ticks = this.ticks + 1;
      return setTimeout(this.play, this.loopTime);
    };

    return Clock;

  })();

  window.buildSomeSceneViews = function(amount) {
    var sceneNumber, view, _i, _results;

    amount = amount - 1;
    _results = [];
    for (sceneNumber = _i = 0; 0 <= amount ? _i <= amount : _i >= amount; sceneNumber = 0 <= amount ? ++_i : --_i) {
      view = new Backbone.Views.ScenePlayView({
        sceneNumber: sceneNumber
      });
      _results.push($('#scenes').append(view.el));
    }
    return _results;
  };

  window.updateOverlay = function(e) {
    window.LOOP_OVERLAP_MS = $(e.target).val();
    return $('#loop-overlay-amount').html(window.LOOP_OVERLAP_MS);
  };

  window.stopAllClips = function() {
    return Backbone.trigger('playScene', -1);
  };

  window.isMobileBrowser = function() {
    return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i);
  };

  (_base5 = window.Backbone).Models || (_base5.Models = {});

  window.Backbone.Models.Loop = (function(_super) {
    __extends(Loop, _super);

    function Loop() {
      _ref5 = Loop.__super__.constructor.apply(this, arguments);
      return _ref5;
    }

    Loop.prototype.defaults = {
      length: 4,
      space: false,
      playing: false,
      volume: 0.5
    };

    Loop.prototype.initialize = function(attributes) {
      if (attributes.fileName != null) {
        return this.setLoopUrlFromFilename(attributes.fileName);
      }
    };

    Loop.prototype.setLoopUrlFromFilename = function(fileName) {
      if ((new Audio()).canPlayType('audio/ogg')) {
        console.log("using ogg");
        return this.set('loopUrl', "audio/ogg/" + fileName + ".theora.oga");
      } else {
        console.log("using mp3");
        return this.set('loopUrl', "audio/mp3/" + fileName + ".mp3");
      }
    };

    return Loop;

  })(Backbone.Model);

  window.Backbone || (window.Backbone = {});

  (_base6 = window.Backbone).Collections || (_base6.Collections = {});

  Backbone.Collections.LoopCollection = (function(_super) {
    __extends(LoopCollection, _super);

    function LoopCollection() {
      this.playLoop = __bind(this.playLoop, this);
      this.stopLoops = __bind(this.stopLoops, this);      _ref6 = LoopCollection.__super__.constructor.apply(this, arguments);
      return _ref6;
    }

    LoopCollection.prototype.model = Backbone.Models.Loop;

    LoopCollection.prototype.initialize = function() {
      this.on('requestTrackStop', this.stopLoops);
      return Backbone.on('playScene', this.playLoop);
    };

    LoopCollection.prototype.stopLoops = function() {
      return this.each(function(model) {
        return model.set('playing', false);
      });
    };

    LoopCollection.prototype.playLoop = function(index) {
      var loopToPlay;

      this.stopLoops();
      loopToPlay = this.models[index];
      if (loopToPlay != null) {
        return loopToPlay.set('playing', true);
      }
    };

    return LoopCollection;

  })(Backbone.Collection);

  window.Backbone || (window.Backbone = {});

  (_base7 = window.Backbone).Views || (_base7.Views = {});

  Backbone.Views.TrackView = (function(_super) {
    __extends(TrackView, _super);

    function TrackView() {
      this.changeVolume = __bind(this.changeVolume, this);
      this.render = __bind(this.render, this);      _ref7 = TrackView.__super__.constructor.apply(this, arguments);
      return _ref7;
    }

    TrackView.prototype.template = Handlebars.templates['track.hbs'];

    TrackView.prototype.tagName = 'li';

    TrackView.prototype.events = {
      "change .volume": "changeVolume"
    };

    TrackView.prototype.initialize = function(options) {
      this.loopCollection = options.collection;
      this.name = options.name;
      return this.render();
    };

    TrackView.prototype.render = function() {
      this.closeSubViews();
      this.$el.html(this.template({
        view: this,
        name: this.name,
        loops: this.loopCollection.models
      }));
      this.renderSubViews();
      return this;
    };

    TrackView.prototype.changeVolume = function(e) {
      this.volume = $(e.target).val();
      return this.loopCollection.invoke('set', {
        volume: this.volume / 100
      });
    };

    TrackView.prototype.onClose = function() {
      return this.closeSubViews();
    };

    return TrackView;

  })(Backbone.Diorama.NestingView);

  window.Backbone || (window.Backbone = {});

  (_base8 = window.Backbone).Views || (_base8.Views = {});

  Backbone.Views.LoopView = (function(_super) {
    __extends(LoopView, _super);

    function LoopView() {
      this.stopBuffer2 = __bind(this.stopBuffer2, this);
      this.stopBuffer1 = __bind(this.stopBuffer1, this);
      this.loop = __bind(this.loop, this);
      this.checkReadyToPlay = __bind(this.checkReadyToPlay, this);
      this.setVolumeFromModel = __bind(this.setVolumeFromModel, this);
      this.onPlayStateChange = __bind(this.onPlayStateChange, this);
      this.render = __bind(this.render, this);      _ref8 = LoopView.__super__.constructor.apply(this, arguments);
      return _ref8;
    }

    LoopView.prototype.template = Handlebars.templates['loop.hbs'];

    LoopView.prototype.controlsTemplate = Handlebars.templates['loop-controls.hbs'];

    LoopView.prototype.tagName = 'li';

    LoopView.prototype.events = {
      'click .play': 'setPlaying',
      'click .stop': 'setStopped'
    };

    LoopView.prototype.initialize = function(options) {
      this.model = options.model;
      this.first = true;
      this.isReadyToPlay = false;
      this.renderedAudioTags = false;
      this.model.on('change:playing', this.onPlayStateChange);
      return this.model.on('change:volume', this.setVolumeFromModel);
    };

    LoopView.prototype.render = function() {
      if (!this.renderedAudioTags) {
        this.renderAudioTags();
      }
      this.renderControls();
      return this;
    };

    LoopView.prototype.renderAudioTags = function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.buffer1 = this.$el.find("[data-role='first']")[0];
      this.buffer1.load();
      this.buffer1.addEventListener('loadeddata', this.checkReadyToPlay);
      this.buffer2 = this.$el.find("[data-role='buffer']")[0];
      this.buffer2.load();
      this.buffer2.addEventListener('loadeddata', this.checkReadyToPlay);
      this.setVolumeFromModel();
      return this.renderedAudioTags = true;
    };

    LoopView.prototype.renderControls = function() {
      if (this.isReadyToPlay) {
        return this.$el.find('.controls').html(this.controlsTemplate({
          playing: this.model.get('playing')
        }));
      } else {
        return this.$el.find('.controls').html('<p>Loading loop...</p>');
      }
    };

    LoopView.prototype.onPlayStateChange = function() {
      if (this.model.get('playing')) {
        return this.play();
      }
    };

    LoopView.prototype.setVolumeFromModel = function() {
      var volume;

      volume = this.model.get('volume');
      this.buffer1.volume = volume;
      return this.buffer2.volume = volume;
    };

    LoopView.prototype.setPlaying = function() {
      this.model.trigger('requestTrackStop');
      return this.model.set('playing', true);
    };

    LoopView.prototype.setStopped = function() {
      return this.model.set('playing', false);
    };

    LoopView.prototype.play = function() {
      this.startListeningToClock();
      return this.render();
    };

    LoopView.prototype.stop = function() {
      this.model.set('playing', false);
      this.stopListeningToClock();
      this.buffer1.pause();
      this.buffer2.pause();
      return this.render();
    };

    LoopView.prototype.checkReadyToPlay = function() {
      if (!this.isReadyToPlay && (this.buffer1 != null) && (this.buffer2 != null)) {
        this.isReadyToPlay = this.buffer1.readyState > 1 && this.buffer2.readyState > 1;
      }
      this.render();
      return this.isReadyToPlay;
    };

    LoopView.prototype.loop = function(tick) {
      var stopFunction;

      if (this.model.get('playing') === false) {
        return this.stop();
      } else if (this.isReadyToPlay) {
        if (this.startedAtTick == null) {
          this.startedAtTick = tick;
        }
        if (this.shouldRestartOnTick(tick)) {
          if (this.first) {
            this.buffer1.play();
            stopFunction = this.stopBuffer2;
          } else {
            this.buffer2.play();
            stopFunction = this.stopBuffer1;
          }
          setTimeout(stopFunction, window.LOOP_OVERLAP_MS);
          return this.first = !this.first;
        }
      }
    };

    LoopView.prototype.stopBuffer1 = function() {
      this.buffer1.pause();
      return this.buffer1.load();
    };

    LoopView.prototype.stopBuffer2 = function() {
      this.buffer2.pause();
      return this.buffer2.load();
    };

    LoopView.prototype.shouldRestartOnTick = function(tick) {
      var ticksPlayed;

      ticksPlayed = tick - this.startedAtTick;
      return ticksPlayed % this.model.get('length') === 0;
    };

    LoopView.prototype.startListeningToClock = function() {
      if (!this.listening) {
        Backbone.on('tick', this.loop);
        this.listening = true;
      }
      return this.startedAtTick = void 0;
    };

    LoopView.prototype.stopListeningToClock = function() {
      Backbone.off('tick', this.loop);
      return this.listening = false;
    };

    LoopView.prototype.onClose = function() {
      return this.stopListeningToClock();
    };

    return LoopView;

  })(Backbone.View);

  window.Backbone || (window.Backbone = {});

  (_base9 = window.Backbone).Views || (_base9.Views = {});

  Backbone.Views.ScenePlayView = (function(_super) {
    __extends(ScenePlayView, _super);

    function ScenePlayView() {
      _ref9 = ScenePlayView.__super__.constructor.apply(this, arguments);
      return _ref9;
    }

    ScenePlayView.prototype.template = Handlebars.templates['scene_play.hbs'];

    ScenePlayView.prototype.tagName = 'li';

    ScenePlayView.prototype.events = {
      'click .play': 'playScene'
    };

    ScenePlayView.prototype.initialize = function(options) {
      this.sceneNumber = options.sceneNumber;
      return this.render();
    };

    ScenePlayView.prototype.render = function() {
      this.$el.html(this.template());
      return this;
    };

    ScenePlayView.prototype.playScene = function() {
      return Backbone.trigger('playScene', this.sceneNumber);
    };

    ScenePlayView.prototype.onClose = function() {};

    return ScenePlayView;

  })(Backbone.View);

  window.Clock = (function() {
    function Clock() {
      this.play = __bind(this.play, this);      this.ticks = 0;
      this.loopTime = 888;
    }

    Clock.prototype.play = function() {
      Backbone.trigger('tick', this.ticks);
      this.ticks = this.ticks + 1;
      return setTimeout(this.play, this.loopTime);
    };

    return Clock;

  })();

  window.buildSomeSceneViews = function(amount) {
    var sceneNumber, view, _i, _results;

    amount = amount - 1;
    _results = [];
    for (sceneNumber = _i = 0; 0 <= amount ? _i <= amount : _i >= amount; sceneNumber = 0 <= amount ? ++_i : --_i) {
      view = new Backbone.Views.ScenePlayView({
        sceneNumber: sceneNumber
      });
      _results.push($('#scenes').append(view.el));
    }
    return _results;
  };

  window.updateOverlay = function(e) {
    window.LOOP_OVERLAP_MS = $(e.target).val();
    return $('#loop-overlay-amount').html(window.LOOP_OVERLAP_MS);
  };

  window.stopAllClips = function() {
    return Backbone.trigger('playScene', -1);
  };

  window.isMobileBrowser = function() {
    return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i);
  };

}).call(this);
