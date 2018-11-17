var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    var allData;

    Parse.readAll((data) => {
      // examine the response from the server request:
      var allData = data.results
      console.log("alldata", allData)
      for (var i = 0; i < allData.length; i++){
        this.renderMessage(data.results[i])
      }
      
    });
  },

  renderRoom: function() {
    if (roomname){ // if someone submits a form without a username or text it returns undefined. So if undefined don't render it.
      var renderedMessage = MessageView.render(obj);
      $(renderedMessage).appendTo('#rooms select');
    }
  }

};
