import { Link, useLocation, useSearchParams } from "react-router-dom";

const Products = () => {
  /* ======================================================================================================================
  location
  ====================================================================================================================== */

  const location = useLocation();

  /* ======================================================================================================================
  searchParams
  ====================================================================================================================== */

  // const [searchParams, setSearchParams] = useSearchParams();

  // // Функція для оновлення певного ключа
  // const updateSearchParams = (key, value) => {
  //   // 1. Копіюємо існуючі параметри
  //   const updatedParams = new URLSearchParams(searchParams);

  //   // 2. Оновлюємо певний ключ
  //   updatedParams.set(key, value);

  //   // 3. Застосовуємо зміни до URL
  //   setSearchParams(updatedParams);
  // };

  // const name = searchParams.get("name");
  // console.log(name, typeof name);
  // const color = searchParams.get("color");

  // const maxPrice = searchParams.get("maxPrice");
  // console.log(maxPrice, typeof maxPrice);
  // const inStock = searchParams.get("inStock");
  // console.log(inStock, typeof inStock);

  return (
    <div>
      {/* location */}
      <Link to="/products/h-1" state={location}>
        Navigate to product h-1
      </Link>

      {/* search params */}
      {/* <h1>Products</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => updateSearchParams("name", e.target.value)}
      />

      <div>
        <p>Name: {name}</p>
        <p>Color: {color}</p>
        <p>Maximum price: {maxPrice}</p>
      </div> */}
    </div>
  );
};
export default Products;
