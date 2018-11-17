var Rooms = {
  roomname: [],
  add: function(roomName) {
    Rooms.roomname.push(roomName);
    RoomsView.renderRoom(roomName);
  }

};