var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    var allData;

    // $('form .submit').on('click', function() {
    //   var text = $('#message').val();
    //   console.log("text", text)
    //   Parse.create({text: text});
    // }),


    Parse.readAll((data) => {
      // examine the response from the server request:
      var allData = data.results
      console.log("alldata", allData)
      for (var i = 0; i < allData.length; i++){
        this.renderMessage(data.results[i])
      }
    });
  },

  renderMessage: function(obj) {
    if (obj.username && obj.text){ // if someone submits a form without a username or text it returns undefined. So if undefined don't render it.
      var renderedMessage = MessageView.render(obj);
      $(renderedMessage).appendTo('#chats');
    }
  }

};

