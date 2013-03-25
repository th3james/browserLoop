// Generated by CoffeeScript 1.4.0
(function() {
  var _base, _base1, _base2, _base3,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  (_base = window.Backbone).Models || (_base.Models = {});

  window.Backbone.Models.Loop = (function(_super) {

    __extends(Loop, _super);

    function Loop() {
      return Loop.__super__.constructor.apply(this, arguments);
    }

    Loop.prototype.defaults = {
      length: 4
    };

    return Loop;

  })(Backbone.Model);

  window.Backbone || (window.Backbone = {});

  (_base1 = window.Backbone).Collections || (_base1.Collections = {});

  Backbone.Collections.LoopCollection = (function(_super) {

    __extends(LoopCollection, _super);

    function LoopCollection() {
      this.stopLoops = __bind(this.stopLoops, this);
      return LoopCollection.__super__.constructor.apply(this, arguments);
    }

    LoopCollection.prototype.model = Backbone.Models.Loop;

    LoopCollection.prototype.initialize = function() {
      return this.on('requestTrackStop', this.stopLoops);
    };

    LoopCollection.prototype.stopLoops = function() {
      return this.each(function(model) {
        return model.set('playing', false);
      });
    };

    return LoopCollection;

  })(Backbone.Collection);

  window.JST || (window.JST = {});

  window.JST['track'] = _.template("<h3><%= name %></h3>\n<ul class='loops'>\n  <%\n    var loop, _i, _len;\n\n    for (_i = 0, _len = loops.length; _i < _len; _i++) {\n      loop = loops[_i];\n  %>\n    <%= view.addSubView(new Backbone.Views.LoopView({model: loop})) %>\n  <% } %>\n</ul>");

  window.Backbone || (window.Backbone = {});

  (_base2 = window.Backbone).Views || (_base2.Views = {});

  Backbone.Views.TrackView = (function(_super) {

    __extends(TrackView, _super);

    function TrackView() {
      this.render = __bind(this.render, this);
      return TrackView.__super__.constructor.apply(this, arguments);
    }

    TrackView.prototype.template = JST['track'];

    TrackView.prototype.tagName = 'li';

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

    TrackView.prototype.onClose = function() {
      return this.closeSubViews();
    };

    return TrackView;

  })(Backbone.Diorama.NestingView);

  window.JST || (window.JST = {});

  window.JST['loop'] = _.template("<h4><%= name %></h4>\n<audio data-role=\"first\" src=\"<%= loopUrl %>\">\n  <p>Your browser does not support the audio element.</p>\n</audio>\n<audio data-role=\"buffer\" src=\"<%= loopUrl %>\">\n  <p>Your browser does not support the audio element.</p>\n</audio>\n<div class='controls'></div>");

  window.JST || (window.JST = {});

  window.JST['loop-controls'] = _.template("<% if (playing) { %>\n  <button class='stop'>Stop</button>\n<% } else { %>\n  <button class='play'>Play</button\n<% }%>");

  window.Backbone || (window.Backbone = {});

  (_base3 = window.Backbone).Views || (_base3.Views = {});

  Backbone.Views.LoopView = (function(_super) {

    __extends(LoopView, _super);

    function LoopView() {
      this.loop = __bind(this.loop, this);

      this.checkReadyToPlay = __bind(this.checkReadyToPlay, this);

      this.stop = __bind(this.stop, this);

      this.stopAtNextBeat = __bind(this.stopAtNextBeat, this);

      this.play = __bind(this.play, this);

      this.render = __bind(this.render, this);
      return LoopView.__super__.constructor.apply(this, arguments);
    }

    LoopView.prototype.template = JST['loop'];

    LoopView.prototype.controlsTemplate = JST['loop-controls'];

    LoopView.prototype.tagName = 'li';

    LoopView.prototype.events = {
      'click .play': 'play',
      'click .stop': 'stopAtNextBeat'
    };

    LoopView.prototype.initialize = function(options) {
      this.model = options.model;
      this.model.set('playing', false);
      this.first = true;
      this.isReadyToPlay = false;
      return this.renderedAudioTags = false;
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
      this.buffer1.addEventListener('loadeddata', this.checkReadyToPlay);
      this.buffer2 = this.$el.find("[data-role='buffer']")[0];
      this.buffer2.addEventListener('loadeddata', this.checkReadyToPlay);
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

    LoopView.prototype.play = function() {
      this.model.trigger('requestTrackStop');
      this.model.set('playing', true);
      this.startListeningToClock();
      return this.render();
    };

    LoopView.prototype.stopAtNextBeat = function() {
      return this.model.set('playing', false);
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
      var startClip, stopClip;
      if (this.model.get('playing') === false) {
        return this.stop();
      } else if (this.isReadyToPlay) {
        if (this.startedAtTick == null) {
          this.startedAtTick = tick;
        }
        if (this.shouldRestartOnTick(tick)) {
          if (this.first) {
            startClip = this.buffer1;
            stopClip = this.buffer2;
          } else {
            startClip = this.buffer2;
            stopClip = this.buffer1;
          }
          startClip.currentTime = 0;
          startClip.play();
          setTimeout(function() {
            stopClip.pause();
            return stopClip.currentTime = 0;
          }, window.LOOP_OVERLAP_MS);
          return this.first = !this.first;
        }
      }
    };

    LoopView.prototype.shouldRestartOnTick = function(tick) {
      var ticksPlayed;
      ticksPlayed = tick - this.startedAtTick;
      return ticksPlayed % this.model.get('length') === 0;
    };

    LoopView.prototype.startListeningToClock = function() {
      Backbone.on('tick', this.loop);
      return this.startedAtTick = void 0;
    };

    LoopView.prototype.stopListeningToClock = function() {
      return Backbone.off('tick', this.loop);
    };

    LoopView.prototype.onClose = function() {
      return this.stopListeningToClock();
    };

    return LoopView;

  })(Backbone.View);

  window.Backbone || (window.Backbone = {});

  window.Clock = (function() {

    function Clock() {
      this.play = __bind(this.play, this);
      this.ticks = 0;
      this.loopTime = 888;
    }

    Clock.prototype.play = function() {
      Backbone.trigger('tick', this.ticks);
      this.ticks = this.ticks + 1;
      return setTimeout(this.play, this.loopTime);
    };

    return Clock;

  })();

}).call(this);
