import { useEffect, useState } from "react";
import "./App.css";
import ArticleList from "./ArticleList/ArticleList";
import { fetchArticlesWithTopic } from "../articles-api";
import SearchForm from "./SearchForm/SearchForm";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";

function App() {
  // 3. Оголошуємо стан
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   // 1. Оголошуємо асинхронну функцію
  //   async function fetchArticles() {
  //     try {
  //       // 5. Встановлюємо індикатор в true перед запитом
  //       setLoading(true);
  //       // Тут будемо виконувати HTTP-запит
  //       // Використовуємо HTTP-функцію
  //       const data = await fetchArticlesWithTopic("react");
  //       // 4. Записуємо дані в стан
  //       setArticles(data);
  //     } catch (error) {
  //       // Тут будемо обробляти помилку
  //       // Встановлюємо стан error в true
  //       setError(true);
  //     } finally {
  //       // 6. Встановлюємо індикатор в false після запиту
  //       setLoading(false);
  //     }
  //   }
  //   // 2. Викликаємо її одразу після оголошення
  //   fetchArticles();
  // }, []);

  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {loading && <Loader />}
      {/* Помилка */}
      {error && <Error />}
      {/* 5. Використовувати стан для відображення JSX-розмітки */}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
}

export default App;
