// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  initialize: function() {
    this.model.on('add', this.render, this);
    this.model.on('remove', this.render, this);
  },

  template: _.template('<div class="song"><%- artist %>   <%- title %></div>'),

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },
  // your code here!
});
