var Rooms = {

  add: function(room) {
     Parse.create({roomname: room})
  }
};