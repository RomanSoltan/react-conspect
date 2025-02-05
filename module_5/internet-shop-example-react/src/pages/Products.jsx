import { useSearchParams } from "react-router-dom";
import { getProducts } from "../fakeAPI";
import SearchBox from "../components/SearchBox";
import ProductList from "../components/ProductList";

const Products = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get("name") ?? "";

  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  const updateSearchParams = (key, value) => {
    const updatedParams = new URLSearchParams(searchParams);

    if (value !== "") {
      updatedParams.set(key, value);
    } else {
      updatedParams.delete(key);
    }

    setSearchParams(updatedParams);
  };

  return (
    <main>
      <SearchBox
        value={productName}
        onChange={(value) => updateSearchParams("name", value)}
      />
      <ProductList products={visibleProducts} />
    </main>
  );
};
export default Products;
