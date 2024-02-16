import "./App.scss";
import UserProfile from "./pages/UserProfile/UserProfile";
import Social from "./pages/Social/Social";
import ProductDetail from "./components/ProductPage/ProductPage";
import EscrowServicePage from "./pages/EscrowServicePage";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product" element={<ProductPage />} />
        <Route path="/social" element={<Social />} />
        <Route path="/escrowService" element={<EscrowServicePage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/Product-detail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
