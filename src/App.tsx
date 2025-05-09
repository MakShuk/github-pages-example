import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [isRussian, setIsRussian] = useState(false);

  const toggleLanguage = () => {
    setIsRussian(!isRussian);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-4xl font-bold text-white mb-4">
        {isRussian ? 'Добро пожаловать!' : 'Welcome!'}
      </h1>
      <button
        onClick={toggleLanguage}
        className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
      >
        {isRussian ? 'Switch to English' : 'Переключить на русский'}
      </button>
    </div>
  );
};

export default App;
