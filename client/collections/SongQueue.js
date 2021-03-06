// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    //song is added
    //song is deleted
    //song is ended
    // this.on('enqueue', function(e) {
    //   console.log('enqueuing');
    //   this.add(e);  
    // });

    this.on('add', function() {
      console.log('adding');
      if (this.length === 1) {
        this.playFirst();
      } 
    });

    this.on('ended', function() {
      console.log('ending');
      this.remove(this.at(0));
      if ( this.length > 0) {
        this.playFirst();  
      }
    });

    this.on('dequeue', function (e) {
      if (e === this.at(0) && this.length > 1) {
        this.at(1).play();
      }
      if (this.length === 1 ) {
        this.at(0).ended();
      }
      this.remove(e);
    });
  },

  playFirst: function () {
    this.at(0).play();
  }

});