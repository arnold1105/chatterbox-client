var Messages = {
  
  _data: {},

  items: function() {
    return _.chain(Messages._data);
  },

  add: function(messages, callback = () => {}) {
    Messages._data[message.objectId] = message;
    callback();
  },

  update: function(messages, callback = () => {}) {
    for(var message of messages) {
      Messages._data[message.objectId] = message;
    }
    callback();
  },

  filterByRoom: function() {
    var filterRoom = Rooms.selected();
    var chats = document.getElementById('chats');
    while(chats.hasChildNodes()) {
      chats.removeChild(chats.firstChild);
    }
    if(Rooms.selected() === '') {
      MessagesView.renderMessage();
    } else {
      var filteredMessages = _.filter(Messages._data, function(data) {
        if(data.roomname === Rooms.selected()) {
          return true;
        } else {
          return false;
        }
      });
    
      for(var message of filteredMessages) {
        var $message = MessageView.render(message);
        MessagesView.$chats.append($message);
      }
    }
  },

  render: function(username, text) {
    return {
      username: username,
      text: text,
      roomname: 'HRSF'
    }
  }
  
};