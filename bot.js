// const Database = {
      
//     "can you tell me which government schemes are available for farmers like me that can help with loans, or agricultural training?": 
//     `Yes, here are some key government schemes that can benefit you:
//     - PM-Kisan Yojana: Rs. 6000 per year directly to your bank account.
//     - PM Fasal Bima Yojana: Low-premium crop insurance for crop loss protection.
//     - Kisan Credit Card (KCC): Low-interest loans for seeds, fertilizers, and farming needs.
//     - Soil Health Card: Helps you understand your soil and use the right fertilizers.
//     - PM Krishi Sinchayee Yojana: Up to 90% subsidy for irrigation systems like drip or sprinkler.`
//   };

//   const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//   recognition.lang = 'en-US';

//   const chatbox = document.getElementById('chatbox');
//   const startButton = document.getElementById('startButton');

//   startButton.onclick = () => {
//     recognition.start();
//   };

//   recognition.onresult = (event) => {
//     const transcript = event.results[0][0].transcript.toLowerCase().trim();

//     // Display user's message (right side)
//     const userMsg = document.createElement('div');
//     userMsg.className = 'user-msg';
//     userMsg.innerText = transcript;
//     const userWrap = document.createElement('div');
//     userWrap.style.textAlign = 'right';
//     userWrap.appendChild(userMsg);
//     chatbox.appendChild(userWrap);

//     // Bot's response
//     let reply = "Sorry, I didn't understand. Please ask a farming-related question.";

//     if (transcript.includes("scheme") || transcript.includes("yojana")) {
//       reply = Database["can you tell me which government schemes are available for farmers like me that can help with loans, or agricultural training?"];
//     } 



//     // Display bot's message (left side)
//     const botMsg = document.createElement('div');
//     botMsg.className = 'bot-msg';
//     botMsg.innerText = reply;
//     const botWrap = document.createElement('div');
//     botWrap.style.textAlign = 'left';
//     botWrap.appendChild(botMsg);
//     chatbox.appendChild(botWrap);

//     chatbox.scrollTop = chatbox.scrollHeight;

//     // Speak the response
//     const speech = new SpeechSynthesisUtterance(reply);
//     window.speechSynthesis.speak(speech);
//   };

//   recognition.onerror = () => {
//     const errorMsg = document.createElement('div');
//     errorMsg.className = 'bot-msg';
//     errorMsg.innerText = "Sorry, couldn't hear. Please try again.";
//     const botWrap = document.createElement('div');
//     botWrap.style.textAlign = 'left';
//     botWrap.appendChild(errorMsg);
//     chatbox.appendChild(botWrap);
//   };













const Database = {
    "can you tell me which government schemes are available for farmers like me that can help with loans, or agricultural training?":
      `Yes, here are some key government schemes that can benefit you:
      - PM-Kisan Yojana: Rs. 6000 per year directly to your bank account.
      - PM Fasal Bima Yojana: Low-premium crop insurance for crop loss protection.
      - Kisan Credit Card (KCC): Low-interest loans for seeds, fertilizers, and farming needs.
      - Soil Health Card: Helps you understand your soil and use the right fertilizers.
      - PM Krishi Sinchayee Yojana: Up to 90% subsidy for irrigation systems like drip or sprinkler.`,
  
    "hello": "Hello! How can I assist you today? Feel free to ask about government schemes or farming-related information.",
    "hi": "Hi there! How can I help you with farming-related queries?",
    "how are you": "I'm just a bot, but I'm doing great! How can I help you today?",
    "thank you": "You're welcome! Let me know if you need more assistance.",
    "bye": "Goodbye! Have a great day, and feel free to come back anytime!",
        "what are the benefits of crop insurance?": 
          "Crop insurance helps protect farmers against financial losses due to natural disasters, pests, or disease outbreaks. It ensures farmers can recover losses and maintain stability in their income.",
        
        "how can i apply for a kisan credit card?":
          "To apply for a Kisan Credit Card, visit your nearest bank or cooperative society with your farmer's identification proof, land records, and other relevant documents. You can also apply online through the bank's portal if available.",
        
        "what is the importance of soil health?":
          "Soil health is essential for healthy crop growth. It helps improve the soil's ability to retain moisture, nutrients, and organic matter, which leads to better yield and fewer pest problems.",
        
        "how do i get a soil health card?":
          "You can get a Soil Health Card from your local agriculture office or online through the government's soil health card program. It provides detailed information about your soil's nutrient content and suggestions for improvement.",
        
        "what are the best crops to grow in my area?":
          "The best crops depend on your region's climate, soil type, and water availability. Contact your local agriculture extension office or use online tools to check what works best in your area.",
        
        "how can i improve my crop yield?":
          "To improve crop yield, focus on practices like soil health management, proper irrigation, crop rotation, and using organic or chemical fertilizers as needed. Regular pest and disease control is also important.",
        
        "what is the weather forecast for farming?":
          "I recommend checking your local weather station or using a weather app designed for farmers to stay updated with the weather conditions in your area. Weather is crucial for deciding planting and harvesting times.",
        
        "how can i prevent crop diseases?":
          "To prevent crop diseases, regularly inspect your plants, use disease-resistant varieties, ensure proper irrigation, and remove infected plants. Crop rotation and organic or chemical treatments can also help.",
        
        "what are the advantages of drip irrigation?":
          "Drip irrigation is water-efficient and delivers water directly to the plant roots, reducing water wastage and promoting healthier plant growth. It is especially useful in water-scarce areas.",
        
        "what are organic farming practices?":
          "Organic farming focuses on using natural methods to grow crops, avoiding synthetic fertilizers and pesticides. Practices include crop rotation, composting, green manure, and biological pest control.",
        
        "how can I market my farm produce?":
          "You can market your farm produce through local farmer markets, online platforms, or direct sales to consumers. Networking with wholesalers, cooperatives, and food processors can also help increase your market reach.",
        
        "how do I start a farm?":
          "Starting a farm requires proper planning, land selection, and understanding the resources needed. Research local regulations, market demand, and crop selection. It’s a good idea to contact a local agriculture expert for advice.",
        
        "can you tell me about the PM Fasal Bima Yojana?":
          "PM Fasal Bima Yojana provides crop insurance to farmers, offering financial protection in case of crop failure due to natural disasters. It is designed to reduce the risks of farming and ensure sustainable agriculture.",
        
        "what is the best fertilizer for my crops?":
          "The best fertilizer depends on the crop you are growing and the soil's nutrient content. It’s recommended to use a balanced fertilizer with nitrogen, phosphorus, and potassium, or use organic options like compost. Soil testing can help determine the right type and quantity of fertilizer.",
        
        "how do I increase the water supply for my farm?":
          "You can increase water supply by investing in efficient irrigation systems like drip or sprinkler systems, rainwater harvesting, and using water storage tanks. Be sure to check the availability of water sources and optimize water usage."
      };
      
  
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  
  const chatbox = document.getElementById('chatbox');
  const startButton = document.getElementById('startButton');
  
  startButton.onclick = () => {
    recognition.start();
  };
  
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase().trim();
  
    // Display user's message (right side)
    const userMsg = document.createElement('div');
    userMsg.className = 'user-msg';
    userMsg.innerText = transcript;
    const userWrap = document.createElement('div');
    userWrap.style.textAlign = 'right';
    userWrap.appendChild(userMsg);
    chatbox.appendChild(userWrap);
  
    // Bot's response based on input
    let reply = "Sorry, I didn't understand. Please ask a farming-related question.";
  
    // Matching user input to predefined responses
    for (const key in Database) {
      if (transcript.includes(key)) {
        reply = Database[key];
        break;
      }
    }
  
    // Display bot's message (left side)
    const botMsg = document.createElement('div');
    botMsg.className = 'bot-msg';
    botMsg.innerText = reply;
    const botWrap = document.createElement('div');
    botWrap.style.textAlign = 'left';
    botWrap.appendChild(botMsg);
    chatbox.appendChild(botWrap);
  
    chatbox.scrollTop = chatbox.scrollHeight;
  
    // Speak the response
    const speech = new SpeechSynthesisUtterance(reply);
    window.speechSynthesis.speak(speech);
  };
  
  recognition.onerror = () => {
    const errorMsg = document.createElement('div');
    errorMsg.className = 'bot-msg';
    errorMsg.innerText = "Sorry, couldn't hear. Please try again.";
    const botWrap = document.createElement('div');
    botWrap.style.textAlign = 'left';
    botWrap.appendChild(errorMsg);
    chatbox.appendChild(botWrap);
  };
  