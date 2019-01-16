var Rooms = {
  
  _data: new Set(),
  
  update: function(data, callback = () => {}) {
    for(var item of data) {
      Rooms._data.add(item.roomname);
    }
    callback();
  },

  selected: function() {
    return RoomsView.$select.val();
  }

};