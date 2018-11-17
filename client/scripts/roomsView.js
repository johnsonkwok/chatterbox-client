var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    setTimeout(this.render,1000);
  },

  render: function() {
    for (const room of Rooms.roomname) {
      RoomsView.renderRoom(room);
    }
  },

  renderRoom: function(room) {
    RoomsView.$select.append(`<option>${room}</option>`);
  }

};
