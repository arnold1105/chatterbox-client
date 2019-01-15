var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    setTimeout(function() {
      for(var i = 0; i < App.data.results.length; i++) {
        if (App.data.results[i].username !== undefined){
        MessagesView.renderMessage(App.data.results[i]);
        }
      }
    }, 1000);
  },

  renderMessage: function(message) {
    var renderedMessage = _.template('<div class="username"><%=username%></div>');
    this.$chats.append(renderedMessage(message));
  }
};