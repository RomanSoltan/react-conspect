import { useState } from 'react';

import './App.css';
import LangSwitcher from './components/LangSwitcher/LangSwitcher';
import LoginForm from './components/LoginForm/LoginForm';
import MyComponent from './components/MyComponent/MyComponent';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [lang, setLang] = useState('uk');
  // Колбек-функція для обробки сабміту форми
  const handleLogin = userData => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };

  return (
    <div>
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
      <SearchBar />
      <h1>Please login to your account!</h1>
      {/* Передаємо колбек як пропс форми */}
      <LoginForm onLogin={handleLogin} />
      <MyComponent />
    </div>
  );
}

export default App;
