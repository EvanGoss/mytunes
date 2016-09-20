// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  events: {
    'ended': function () { this.model.ended(); }
  },

  initialize: function() {
    this.model.on('add', this.render, this);
    this.on('ended', this.render, this);
    console.log(this.model);
  },

  setSong: function(song) {
    console.log('setting');
    this.model = song;
    this.render();
  },

  render: function() {
    console.log('rendering');
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
