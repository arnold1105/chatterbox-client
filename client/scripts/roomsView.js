var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.renderRoom);
  },

  renderRoom: function(room) {
    var options = _.template("<option><%=room%></option>");
    this.$select.append(options({room: room}));
  }

};
