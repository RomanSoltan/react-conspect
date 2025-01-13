import './App.css';

const App = () => {
  // =======================
  //Об'єкт події

  const handleClick = evt => {
    console.log(evt);
  };

  return (
    <>
      <button onClick={handleClick}>First button</button>
      <button onClick={evt => console.log(evt)}>Second button</button>
    </>
  );

  // =============================
  // Обробка подій
  // const handleClick = () => {
  //   alert('I am a button');
  // };
  // return <button onClick={handleClick}>Click me!</button>;

  // // інший спосіб
  // // return <button onClick={() => alert("I'm a button!")}>Click me!</button>;
};

export default App;
