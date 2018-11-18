var MessagesView = {
  $chats: $("#chats"),

  initialize: function () {
    setTimeout(this.render, 1000);
    // $.get(Parse.server, MessagesView.render);
  },

  render: function () {
    if (Messages.results) {
      for (const message of Messages.results) {
        MessagesView.renderMessage(message);
      }
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
      `<div class="chat"><div id=${message.objectId} class='username'><b>${message.username}</b></div><div>${text}</div></div>`
    );

    $(`#${message.objectId}`).on('click', function() {
      const username = $(this).text();
      Friends.toggleStatus(username);
      MessageView.hilightFriendsText(username);
    });
  }
};