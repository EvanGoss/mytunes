// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  render: function() {
    this.collection.forEach(function(song) {
      var entryView = new SongQueueEntryView({model: song});
      return this.$el.append(entryView.render());
    }, this);
  }

});
