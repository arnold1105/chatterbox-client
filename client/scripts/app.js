var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  data: null,

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    $(document).on('click', '.username', function(event) {
      console.log(event.target);
      Friends.toggleStatus();
    });

    $(document).on('click', '#rooms button', function(event) {
      alert('clicked!')
    })
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      App.data = data;

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
