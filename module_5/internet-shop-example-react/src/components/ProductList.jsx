import { Link, useLocation } from "react-router-dom";
import s from "./ProductList.module.css";

const ProductList = ({ products }) => {
  const location = useLocation();

  return (
    <div className={s.container}>
      {products.map((product) => (
        <div key={product.id} className={s.cardWrapper}>
          <Link to={`${product.id}`} state={location}>
            <img src="https://via.placeholder.com/200x100" alt="" />
            <h3 className={s.productName}>{product.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
