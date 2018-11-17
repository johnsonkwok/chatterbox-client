var MessagesView = {
  $chats: $("#chats"),

  initialize: function () {
    setTimeout(this.render, 1000);
  },

  render: function () {
    for (const message of Messages.results) {
      MessagesView.renderMessage(message);
    }
  },

  renderMessage: function (message) {
    let text;
    if (message.text) {
      text = message.text;
      text = text.replace(/</g, "&lt;").replace(/\>/g, '&#62;');
    } else {
      let text = '';
    }
    $("#chats").append(
      `<p><b class='username'>${message.username}</b><br>${text}</p>`
    );
    
  }
};