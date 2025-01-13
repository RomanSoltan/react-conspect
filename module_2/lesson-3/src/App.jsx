import './App.css';

const App = () => {
  const handleClick = () => {
    alert('I am a button');
  };

  return <button onClick={handleClick}>Click me!</button>;

  // інший спосіб
  // return <button onClick={() => alert("I'm a button!")}>Click me!</button>;
};

export default App;
