var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // var renderedMessage = _.template(JSON.stringify(message));
    MessagesView.$chats.on('load', MessagesView.renderMessage);

    // $('#chats').append(renderedMessage);

  },

  renderMessage: function(message) {
    var renderedMessage = _.template('<div><%=username%>' + 
                                     '<%=text%>' +
                                    '<%=roomname%></div>');
    this.$chats.append(renderedMessage(message));
  }

};