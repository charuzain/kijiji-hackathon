
import './App.css';
import UserProfile from './pages/UserProfile/UserProfile';
import EscrowServicePage from "./pages/EscrowServicePage";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/product" element={<ProductPage />} />
            <Route path="/escrowService" element={<EscrowServicePage />} />
           <Route path="/escrowService" element={<UserProfile/>} />
          </Routes>
        </main>
      </BrowserRouter>
  );
}
export default App;
