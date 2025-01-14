import { useState, useEffect } from 'react';
import './App.css';

// // Розмонтування
// const Modal = () => {
//   useEffect(() => {
//     // Зберігаємо ідентифікатор інтервалу в змінну
//     const intervalId = setInterval(() => {
//       console.log(`Interval ${Date.now()}`);
//     }, 2000);
//     return () => {
//       // Очищаємо інтервал за його ідентифікатором
//       // Функція очищення
//       // Хук useEffect може оголошувати функцію очищення
//       // ефекту, для цього з колбек-функції потрібно
//       // повернути ще одну функцію.
//       clearInterval(intervalId);
//     };
//   }, []);
//   return <div>Modal</div>;
// };

function App() {
  // Декілька ефектів
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    console.log('First updated:', first);
  }, [first]);

  useEffect(() => {
    console.log('Second updated:', second);
  }, [second]);

  useEffect(() => {
    console.log('first or Second updated:', first + second);
  }, [first, second]);

  return (
    <>
      <button onClick={() => setFirst(first + 1)}>First: {first}</button>
      <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
    </>
  );
  // ============================================
  // // Оновлення
  // // Щоб ефект працював стабільно потрібно
  // // додати змінну clicks до масиву залежностей
  // const [clicks, setClicks] = useState(0);
  // useEffect(() => {
  //   console.log('Clicks updated:', clicks);
  // }, [clicks]);
  // return (
  //   <button onClick={() => setClicks(clicks + 1)}>
  //     You clicked {clicks} times
  //   </button>
  // );
  // ===================================
  // // // Розмонтування (продовження)
  // const [isOpen, setIsOpen] = useState(false);
  // return (
  //   <div>
  //     <button onClick={() => setIsOpen(!isOpen)}>
  //       {isOpen ? 'Close' : 'Open'}
  //     </button>
  //     {isOpen && <Modal />}
  //   </div>
  // );
  // ====================================
  // // Оголошуємо ефект
  // // монтування
  // // Якщо другим аргументом хука useEffect передати
  // // порожній масив, то такий ефект виконається лише
  // // один раз - на етапі монтування компонента, і більше ніколи.
  // const [clicks, setClicks] = useState(0);
  // useEffect(() => {
  //   console.log('You can see me only once');
  // }, []);
  // /** Хук useEffect(callback, deps) оголошує ефект,
  //  * який приймає два аргументи:
  //  *  - Перший аргумент callback завжди є анонімною
  //  * функцією, всередині якої виконується вся логіка
  //  * ефекту. Наприклад, запити на сервер, запис у
  //  * локальне сховище і т.п.
  //  *  - Другий аргумент deps - це масив залежностей
  //  * ефекту. Коли будь-яка з цих залежностей змінюється,
  //  * ефект буде викликаний і виконувати callback. Це
  //  * може бути стан, пропси або будь-яке локальне
  //  * значення всередині компонента.
  //  *
  //  * Хук useEffect не повертає жодного значення як результат
  //  * своєї роботи, а лише запускає виконання анонімної функції.
  //  * Іншими словами, неможливо виконати в середині функції
  //  * обчислення і повернути їх у зовнішній код.
  //  * Ефекти не призначені для цього!
  //  */
  // return (
  //   <>
  //     <button onClick={() => setClicks(clicks + 1)}>
  //       You clicked {clicks} times
  //     </button>
  //   </>
  // );
}

export default App;
