import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const DiscoverPage = lazy(() => import("./pages/DiscoverPage"));
const CreatorPage = lazy(() => import("./pages/CreatorPage"));
const CreatorsPage = lazy(() => import("./pages/CreatorsPage"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage"));
const CreateNFTPage = lazy(() => import("./pages/CreateNFTPage"));
const StatsPage = lazy(() => import("./pages/StatsPage"));
const WalletsPage = lazy(() => import("./pages/WalletsPage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route index element={<WalletsPage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route
            path="/discover/product-details"
            element={<ProductDetailsPage />}
          />
          <Route path="/creators" element={<CreatorsPage />} />
          <Route path="/creators/creator" element={<CreatorPage />} />
          <Route path="/creators-nft" element={<CreateNFTPage />} />
          <Route path="/stats" element={<StatsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
