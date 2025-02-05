import { useSearchParams } from "react-router-dom";

const UpdateSingleParamExample = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Функція оновлення певного ключа
  const updateSearchParams = (key, value) => {
    // 1. Копіюємо існуючі параметри
    const updatedParams = new URLSearchParams(searchParams);

    // 2. Оновлюємо певний ключ
    updatedParams.set(key, value);

    // 3. Застосовуємо зміни до URL
    setSearchParams(updatedParams);
  };

  return (
    <div>
      <h2>Оновлення одного параметра в URL</h2>
      <p>Поточні параметри:</p>
      <pre>{searchParams.toString()}</pre>

      <button onClick={() => updateSearchParams("name", "snickers")}>
        Змінити name на snickers
      </button>
      <button onClick={() => updateSearchParams("maxPrice", 800)}>
        Змінити maxPrice на 800
      </button>
      <button onClick={() => updateSearchParams("inStock", false)}>
        Змінити inStock на false
      </button>
    </div>
  );
};
export default UpdateSingleParamExample;
