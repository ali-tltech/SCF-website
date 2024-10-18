import React, { useState, useRef, useEffect } from 'react';

const faqDatabase = [
  { question: "What are your operating hours?", answer: "Our customer service is available 24/7." },
  { question: "How do I check my account balance?", answer: "You can check your account balance by logging into your online banking portal or mobile app." },
  { question: "What is the minimum balance required?", answer: "The minimum balance required varies depending on the type of account. For a basic savings account, it's typically $100." },
  { question: "How can I report a lost or stolen card?", answer: "To report a lost or stolen card, please call our 24/7 hotline at 1-800-123-4567 immediately." },
];

const simulateAIResponse = (message) => {
  const lowercaseMessage = message.toLowerCase();
  if (lowercaseMessage.includes("loan")) {
    return "We offer various types of loans including personal loans, home loans, and auto loans. Each has different terms and interest rates. Would you like more information on a specific type of loan?";
  } else if (lowercaseMessage.includes("invest")) {
    return "We provide various investment options such as stocks, bonds, mutual funds, and ETFs. It's important to consider your financial goals and risk tolerance when investing. Would you like to speak with one of our financial advisors?";
  } else if (lowercaseMessage.includes("credit score")) {
    return "Your credit score is an important factor in many financial decisions. We offer free credit score checks to our customers. You can access this service through your online banking portal. Would you like me to guide you through the process?";
  } else {
    return "I'm sorry, I don't have specific information about that. Would you like me to connect you with a customer service representative for more detailed assistance?";
  }
};

const ChatbotPreview = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', content: 'Hello! How can I assist you with your financial queries today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { type: 'user', content: input }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const faqMatch = faqDatabase.find(faq => 
        faq.question.toLowerCase().includes(input.toLowerCase())
      );

      let botResponse;
      if (faqMatch) {
        botResponse = faqMatch.answer;
      } else {
        botResponse = simulateAIResponse(input);
      }

      setMessages(prev => [...prev, { type: 'bot', content: botResponse }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Simulate varying response time
  };

  return (
    <div className="flex flex-col h-[50vh] max-w-md mx-auto p-4 bg-gray-800 fixed  bottom-0 z-50 right-0 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Financial Chatbot</h1>
      <div className="flex-grow overflow-auto mb-4 bg-white rounded-lg shadow p-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${message.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
              {message.content}
            </span>
          </div>
        ))}
        {isTyping && (
          <div className="text-left">
            <span className="inline-block p-2 rounded-lg bg-gray-200 text-black">
              Typing...
            </span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..."
          className="flex-grow p-2 rounded-l-lg border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatbotPreview;