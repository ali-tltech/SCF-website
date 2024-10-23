import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot } from 'lucide-react';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Robot Button */}
      <motion.button
        className="fixed bottom-6 right-6 p-4 z-50 bg-blue-500 rounded-full shadow-lg text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
      >
        <Bot size={24} />
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleChat}
          />
        )}
      </AnimatePresence>

      {/* Chatbot Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-full max-w-md"
          >
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-blue-500 p-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Bot className="text-white" size={24} />
                  <h2 className="text-xl font-semibold text-white">Financial Assistant</h2>
                </div>
                <button 
                  onClick={toggleChat}
                  className="text-white hover:bg-blue-600 rounded-full p-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Chatbot Content */}
              <ChatbotContent />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Modified ChatbotContent component (previously ChatbotPreview)
const ChatbotContent = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', content: 'Hello! How can I assist you with your financial queries today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

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
    }, 1000 + Math.random() * 1000);
  };

  return (
    <div className="flex flex-col h-[500px]">
      {/* Messages Area */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] p-3 rounded-lg ${
              message.type === 'user' 
                ? 'bg-blue-500 text-white rounded-br-none'
                : 'bg-gray-100 text-gray-800 rounded-bl-none'
            }`}>
              {message.content}
            </div>
          </motion.div>
        ))}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="bg-gray-100 text-gray-800 p-3 rounded-lg rounded-bl-none">
              Typing...
            </div>
          </motion.div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleSend}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </motion.button>
        </div>
      </div>
    </div>
  );
};

// Keep the existing faqDatabase and simulateAIResponse functions
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

export default ChatbotButton;