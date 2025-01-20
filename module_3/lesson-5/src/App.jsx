import { useState } from 'react';

import './App.css';
import LangSwitcher from './components/LangSwitcher/LangSwitcher';
import LoginForm from './components/LoginForm/LoginForm';
import MyComponent from './components/MyComponent/MyComponent';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [coffeeSize, setCoffeeSize] = useState('sm');
  const handleSizeChange = e => {
    setCoffeeSize(e.target.value);
  };

  const [lang, setLang] = useState('uk');
  // Колбек-функція для обробки сабміту форми
  const handleLogin = userData => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };

  return (
    <div>
      {/* radio btn */}
      <h1>Select coffee size</h1>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={coffeeSize === 'sm'}
          onChange={handleSizeChange}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="md"
          checked={coffeeSize === 'md'}
          onChange={handleSizeChange}
        />
        Medium
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="lg"
          checked={coffeeSize === 'lg'}
          onChange={handleSizeChange}
        />
        Large
      </label>
      {/* Select */}
      <p>Selected language: {lang}</p>
      {/* <LangSwitcher value={lang} onSelect={setLang} /> */}
      <SearchBar />
      <h1>Please login to your account!</h1>
      {/* Передаємо колбек як пропс форми */}
      <LoginForm onLogin={handleLogin} />
      <MyComponent />
    </div>
  );
}

export default App;
