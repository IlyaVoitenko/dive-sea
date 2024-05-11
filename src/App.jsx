import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const DiscoverPage = lazy(() => import("./pages/DiscoverPage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/discover" element={<DiscoverPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
