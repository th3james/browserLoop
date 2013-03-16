// Generated by CoffeeScript 1.4.0
(function() {
  var _base,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.JST || (window.JST = {});

  window.JST['loop'] = _.template("<h1>Loop View</h1>\n<audio data-role=\"first\" src=\"<%= loopUrl %>\">\n  <p>Your browser does not support the audio element.</p>\n</audio>\n<audio data-role=\"buffer\" src=\"<%= loopUrl %>\">\n  <p>Your browser does not support the audio element.</p>\n</audio>");

  window.Backbone || (window.Backbone = {});

  (_base = window.Backbone).Views || (_base.Views = {});

  Backbone.Views.LoopView = (function(_super) {

    __extends(LoopView, _super);

    function LoopView() {
      this.loop = __bind(this.loop, this);

      this.stop = __bind(this.stop, this);

      this.play = __bind(this.play, this);

      this.render = __bind(this.render, this);
      return LoopView.__super__.constructor.apply(this, arguments);
    }

    LoopView.prototype.template = JST['loop'];

    LoopView.prototype.initialize = function(options) {
      this.loopUrl = options.loopUrl;
      this.playing = false;
      this.listening = false;
      this.first = true;
      this.isReadyToPlay = false;
      this.render();
      return this.play();
    };

    LoopView.prototype.render = function() {
      this.$el.html(this.template({
        loopUrl: this.loopUrl
      }));
      this.buffer1 = $("[data-role='first']")[0];
      return this.buffer2 = $("[data-role='buffer']")[0];
    };

    LoopView.prototype.play = function() {
      this.playing = true;
      return this.startListeningToClock();
    };

    LoopView.prototype.stop = function() {
      this.playing = false;
      return this.stopListeningToClock();
    };

    LoopView.prototype.readyToPlay = function() {
      if (!this.isReadyToPlay && (this.buffer1 != null) && (this.buffer2 != null)) {
        debugger;
        this.isReadyToPlay = this.buffer1.readyState > 1 && this.buffer2.readyState > 1;
      }
      return this.isReadyToPlay;
    };

    LoopView.prototype.loop = function() {
      var startClip, stopClip;
      if (this.readyToPlay()) {
        if (this.first) {
          startClip = this.buffer1;
          stopClip = this.buffer2;
        } else {
          startClip = this.buffer2;
          stopClip = this.buffer1;
        }
        startClip.currentTime = 120;
        startClip.play();
        setTimeout(function() {
          stopClip.pause();
          return stopClip.currentTime = 120;
        }, 500);
        return this.first = !this.first;
      }
    };

    LoopView.prototype.startListeningToClock = function() {
      Backbone.on('tick', this.loop);
      return this.listening = true;
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

  window.Clock = (function() {

    function Clock() {
      this.play = __bind(this.play, this);
      this.loopTime = 2286;
    }

    Clock.prototype.play = function() {
      Backbone.trigger('tick');
      return setTimeout(this.play, this.loopTime);
    };

    return Clock;

  })();

}).call(this);
