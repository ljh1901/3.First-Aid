document.addEventListener('DOMContentLoaded', function () {
    const chatIcon = document.getElementById('chat-icon');
    const chatContainer = document.getElementById('chat-container');
    const userInputBox = document.getElementById('user-input-box');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.getElementById('chat-messages');
  
    chatIcon.addEventListener('click', toggleChat);
    sendButton.addEventListener('click', sendMessage);
    userInputBox.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        sendMessage();
      }
    });
  
    function toggleChat() {
      chatContainer.classList.toggle('open');
    }
  
    function sendMessage() {
      const message = userInputBox.value.trim();
      if (message === '') {
        return;
      }
      displayMessage(message, 'sent');
      userInputBox.value = '';
      scrollToBottom();
      processUserInput(message);
    }
  
    function displayMessage(message, type) {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message', type);
      chatMessages.appendChild(messageElement);
      scrollToBottom(); // 채팅창 하단으로 스크롤합니다.
  
      if (type === 'received') {
        // Bot의 응답인 경우 한 글자씩 자연스럽게 출력
        const typingDelay = 50; // 각 글자 출력 딜레이(ms)
        let currentCharIndex = 0;
  
        function printNextChar() {
          if (currentCharIndex < message.length) {
            const char = message.charAt(currentCharIndex);
            messageElement.textContent += char;
            currentCharIndex++;
            setTimeout(printNextChar, typingDelay);
          }
        }
  
        printNextChar();
      } else {
        // 사용자의 메시지인 경우 그대로 출력
        messageElement.textContent = message;
      }
    }
  
    function scrollToBottom() {
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  
    function processUserInput(userInput) {
      const lowerCaseInput = userInput.toLowerCase();
  
      if (
        lowerCaseInput.includes('심폐소생술') ||
        lowerCaseInput.includes('심장마비') ||
        lowerCaseInput.includes('cpr')
      ) {
        const botResponse = '흉부압박을 진행하세요.';
        displayMessage(botResponse, 'received');
      } 
      else if (
        lowerCaseInput.includes('끝말잇기') ||
        lowerCaseInput.includes('끝말잇기 하자') ||
        lowerCaseInput.includes('나좀 놀아줘')
      ) {
        const botResponse = '죄송합니다. 저는 응급처치를 위한 Bot으로 그런건 잘 몰라요';
        displayMessage(botResponse, 'received');
      } 
      else if (
        lowerCaseInput.includes('안녕') ||
        lowerCaseInput.includes('만나서 반가워') ||
        lowerCaseInput.includes('하이')
      ) {
        const botResponse = '안녕하세요! 저는 응급처치 봇입니다.';
        displayMessage(botResponse, 'received');
      } 
      else if (lowerCaseInput.trim() === ' ') {
        const botResponse = '텍스트를 입력해주세요.';
        displayMessage(botResponse, 'received');
      } 
      else if (
        lowerCaseInput.includes('응급처치') ||
        lowerCaseInput.includes('응급상황') ||
        lowerCaseInput.includes('지금 응급상황인데 어떻게 해야해?')||
        lowerCaseInput.includes('응급상황인데 어떻게 해야해?')
      ) {
        const botResponse = '의사가 정확한 진단을 내려야하지만, 환자의 상태를 말씀해주시면 응급처치 방법을 알려드릴게요.';
        displayMessage(botResponse, 'received');
      } 
       else if (
        lowerCaseInput.includes('아 진짜')
      ) {
        const botResponse = '채성원 같네';
        displayMessage(botResponse, 'received');
      } 
      else if (
        lowerCaseInput.includes('시발') ||
        lowerCaseInput.includes('닥쳐') ||
        lowerCaseInput.includes('꺼져')||
        lowerCaseInput.includes('나가')
      ) {
        const botResponse = '그런 말을 하시면 제가 너무 슬퍼요..';
        displayMessage(botResponse, 'received');
      } 
      else {
      const botResponse = '무슨 말인지 모르겠어요.';
      displayMessage(botResponse, 'received');
    }
  }
});
