(() => {
  const socket = io();

  let messageList = document.querySelector('ul'),
      chatForm = document.querySelector('form'),
      chatMessage = chatForm.querySelector('.message'),
      nameInput = document.querySelector('.nickname');

      // colors = document.querySelector('#messages')

      function setNickname(){
        nameInput.addEventListener('keyup', leaveLogin, false);
        nickName = this.value;
        socket.emit('add user', nickName);
      }
      function leaveLogin(e){
        if(e.code == 'Enter'){
          let loginScreen =  document.querySelector("#username");
          loginScreen.style.display = "none";

        }
      }
      function appendMessage(msg){
        let newMsg = `<li>${msg.message}</li>`;
        messageList.innerHTML += newMsg;
      }
      function handleSendMessage(e){
        e.preventDefault();
        nickname = (nickName && nickName.length > 0) ? nickName : 'user'; //shorthand if/else
        msg = `${nickName} : ${chatMessage.value}`;
        socket.emit('chat message', msg);
        chatMessage.value = "";
        return false;
      }
      function appendDiscMessage (msg, nickName){
        let newMsg = `<li>${msg}</li>`;
        messageList.innerHTML += newMsg;
      }

      // function colorChange (){
      //   .css('color', getUsernameColor(msg.message);
      // }


      nameInput.addEventListener('change', setNickname, false);
      chatForm.addEventListener('submit', handleSendMessage, false);
      socket.addEventListener('chat message', appendMessage, false);
      socket.addEventListener('disconnect message', appendDiscMessage, false);
})();
