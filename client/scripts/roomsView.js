var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    setTimeout(this.render, 1000);

    $('#rooms button').on('click', function () {
      const room = prompt('What is the name of your room?');
      Rooms.add(room);
    });
  },

  render: function () {
    if (Rooms.roomname && Rooms.roomname.length > 0) {
      for (const room of Rooms.roomname) {
        RoomsView.renderRoom(room);
      }
    }
  },

  renderRoom: function (room) {
    RoomsView.$select.append(`<option>${room}</option>`); 
  }
  

};