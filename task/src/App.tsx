import { Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";

function App() {
  return (
    <Routes>
      <Route path="*" element={<ProductListPage />} />
    </Routes>
  );
}

export default App;
