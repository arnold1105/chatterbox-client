var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    setTimeout(function(){
      for (var i = 0; i < App.data.results.length; i++){
        if (App.data.results[i].roomname !== undefined &&
        $('#rooms select').text().indexOf(App.data.results[i].roomname) === -1) {  
          RoomsView.renderRoom(App.data.results[i]);
        }
      }    
    }, 1000);
  },

  renderRoom: function(room) {
    var options = _.template('<option class="roomname"><%=roomname%></option>');
   
    this.$select.append(options({roomname : room.roomname}));
  }

};
