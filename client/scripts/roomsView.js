var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    var allData;

    Parse.readAll((data) => {
      // examine the response from the server request:
      var allData = data.results
      for (var i = 0; i < allData.length; i++){
        // console.log("data.results[i]", data.results[0])
        this.renderRoom(data.results[i].roomname)
      }
      
    });
  },

  render: _.template(`
        <option ><%- roomname %></option>
        
    `),

  renderRoom: function(roomname) {

    if (roomname){ // if someone submits a form without a username or text it returns undefined. So if undefined don't render it.
      var keyValue = {
        roomname: roomname
      }

      var renderedRoom = this.render(keyValue);
      $(renderedRoom).appendTo(this.$select);
    }
  },

  // addRoom: function(){
  //   $(this.$button).on('click', function() {
  //     var selectedRoom = $('#rooms select option:selected').text();
  //     alert('hello');
  //     // $(this.$select).val();
  //   })
  // }

};
