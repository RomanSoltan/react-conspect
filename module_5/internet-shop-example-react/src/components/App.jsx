import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import AppBar from "./AppBar";
import s from "./App.module.css";

// import Home from "../pages/Home";
// import About from "../pages/About";
// import ProductDetails from "../pages/ProductDetails";
// import Products from "../pages/Products";
// import Mission from "./Mission";
// import Team from "./Team";
// import Reviews from "./Reviews";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Products = lazy(() => import("../pages/Products"));
const Mission = lazy(() => import("./Mission"));
const Team = lazy(() => import("./Team"));
const Reviews = lazy(() => import("./Reviews"));

function App() {
  return (
    <div className={s.container}>
      <AppBar />

      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
