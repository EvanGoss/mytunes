// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    //song is added
    //song is deleted
    //song is ended
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      } 
    });

    this.on('ended', function() {
      this.remove(this.at(0));
      if ( this.length > 0) {
        this.playFirst();  
      }
    });

    this.on('dequeue', function (e) {
      this.remove(e);
    });

  },

  playFirst: function () {
    this.at(0).play();
  }



});