import "./App.css";
import Products from "../pages/Products";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Analytics from "path/to/analytics-service";

function App() {
  /* ======================================================================================================================
  useLocation
  ====================================================================================================================== */
  const location = useLocation();

  useEffect(() => {
    Analytics.send(location);
  }, [location]);
  /* ======================================================================================================================
  search params
  ====================================================================================================================== */

  // const [user, setUser] = useState(null);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const username = searchParams.get("username");

  // useEffect(() => {
  //   // Тут виконуємо асинхронну операцію,
  //   // наприклад HTTP-запит за інформацією про користувача
  //   if (username === "") return;
  //   FakeAPI.getUser(username).then(setUser);
  // }, [username]);

  // const updateSearchParams = (key, value) => {
  //   const updatedParams = new URLSearchParams(searchParams);
  //   updatedParams.set(key, value);
  //   setSearchParams(updatedParams);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   updateSearchParams("username", form.elements.username.value);
  //   form.reset();
  // };

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <button type="submit">Search</button>
      </form>
      {user && <UserInfo user={user} />} */}
      {/* <Products /> */}
    </div>
  );
}

export default App;
