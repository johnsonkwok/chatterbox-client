var MessageView = {

  render: _.template(`
      <!--
      <div class="chat">
        <div class="username"></div>
        <div></div>
      </div>
      -->
    `),
  
  hilightFriendsText: function(username) {
    $('.username').each(function() {
      if ($(this).text() === username) {
        if (Friends[username]) {
          $(this).next().addClass('friend');
        } else {
          $(this).next().removeClass('friend');
        }
      }
    });
  }

};