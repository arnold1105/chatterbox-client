var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $(document).on('change', 'select', Messages.filterByRoom);
  },

  renderMessage: function() {
    Messages.items().each((message) => {
      if(message.username !== undefined && message.text !== undefined) {
        var $message = MessageView.render(message);
        MessagesView.$chats.append($message);
      }
    })
  }
};