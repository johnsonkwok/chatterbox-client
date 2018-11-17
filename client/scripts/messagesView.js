var MessagesView = {
  $chats: $("#chats"),

  initialize: function() {
    setTimeout(this.render,1000);
    // Parse.readAll(() => {
    //   MessagesView.render();
    // });
  },

  render: function() {
    for (const message of Messages.results) {
      MessagesView.renderMessage(message);
    }
  },
  
  renderMessage: function(message) {
    $("#chats").append(
      `<p><b>${message.username}</b><br>${message.text}</p>`
    );
  }
};
