import { useState } from 'react';

const ControledLoginForm = () => {
  const [values, setValues] = useState({
    login: '',
    password: '',
  });

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);

    // Очищаємо форму
    setValues({
      login: '',
      password: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Controled Form</h1>
      <input
        type="text"
        name="login"
        value={values.login}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default ControledLoginForm;
