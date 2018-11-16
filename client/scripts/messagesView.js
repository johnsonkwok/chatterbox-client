var MessagesView = {
  $chats: $("#chats"),

  initialize: function() {},

  render: function() {},
  
  renderMessage: function(message) {
    $("#chats").append(
      `<p><b>${message.username}</b> ${message.text} ${message.roomname} </p>`
    );
  }
};
