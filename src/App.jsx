import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Brands from "./pages/Brands";
import BrandDetails from "./pages/BrandDetails";
import Dealership from "./pages/Dealership";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productSlug" element={<ProductDetails />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/brands/:brandSlug" element={<BrandDetails />} />
          <Route path="/dealership" element={<Dealership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
