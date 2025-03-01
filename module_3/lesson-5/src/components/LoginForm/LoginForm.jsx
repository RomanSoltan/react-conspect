const LoginForm = ({ onLogin }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const { login, password } = form.elements;

    // Викликаємо пропс onLogin
    onLogin({
      login: login.value,
      password: password.value,
    });
    // Посилання на DOM-елементи
    console.log(login, password);
    // Значення полів
    console.log(login.value, password.value);
    // Скидаємо значення полів після відправки
    form.reset();
  };

  return (
    // обробити відправку форми
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <input type="password" name="password" />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
