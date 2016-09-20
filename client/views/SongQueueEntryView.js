// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  events: {
    'click': function() {
      this.model.dequeue();
    }
  },

  initialize: function() {
    this.model.on('add', this.render, this);
    this.model.on('remove', this.render, this);

  },

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  },
  // your code here!
});
