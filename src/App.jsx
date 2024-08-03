import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const DiscoverPage = lazy(() => import("./pages/DiscoverPage"));
const CreatorsPage = lazy(() => import("./pages/CreatorsPage"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage"));
const CreateNFTPage = lazy(() => import("./pages/CreateNFTPage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route
            path="/discover/product-details"
            element={<ProductDetailsPage />}
          />
          <Route path="/creators" element={<CreatorsPage />} />
          <Route path="/creators-nft" element={<CreateNFTPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
