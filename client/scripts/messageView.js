var MessageView = { // <div><%= username %></div> Don't use an equal sign for this. Instead use - this (<div><%- username %></div>) It prevents XSS attacks.
  render: _.template(`
        <div class="chat">
          <div class="username" ><%- username %></div> 
          <div><%- text %></div>
        </div>
        
    `)
};