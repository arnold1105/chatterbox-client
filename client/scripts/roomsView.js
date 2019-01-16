var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    $(document).on('change', 'select', function() {
      $('option[value="' + this.value + '"]', this)
        .attr('selected', true)
        .siblings()
        .removeAttr('selected')
    });
  },

  renderRoom: function() {
    for(var room of Rooms._data) {
      var options = _.template(`<option class="roomname"><%-roomname%></option>`);
      RoomsView.$select.append(options({roomname : room}));
    }
  }

};
