/**
 * Оскільки обробники подій оголошуються всередині компонента,
 * вони мають доступ до пропсів компонента. Ось приклад
 * компонента кнопки CustomButton, яка, коли на неї натискано,
 * виводить alert зі значенням пропса message: */

const CustomButton = ({ message, children }) => {
  return (
    <>
      <button onClick={() => alert(message)}>{children}</button>
    </>
  );
};

export default CustomButton;
