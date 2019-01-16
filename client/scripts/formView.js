var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var text = $('#message').val();
    var username = App.username;
    var message = Messages.render(username, text);
    Parse.create(message, () => {
      Messages.add(message, MessagesView.renderMessage);
      window.location.reload();
    });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};