import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  console.log(location.state);

  const backLinkHref = location.state ?? "/products";

  return <Link to={backLinkHref}>Back to products</Link>;
};
export default ProductDetails;
