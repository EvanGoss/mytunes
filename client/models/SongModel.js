// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
//enqueue, dequeue, ended
  play: function() {
    // Triggering an event here will also trigger the event on the collection
    console.log('playing');
    this.trigger('play', this);
  },

  enqueue: function () {
    this.trigger('enqueue', this);

  },

  dequeue: function () {
    this.trigger('dequeue', this);
  },

  ended: function () {
    console.log('ended');
    this.trigger('ended', this);
  },
});
