import EscrowServicePage from "./pages/EscrowServicePage";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/product" element={<ProductPage />} />
            <Route path="/escrowService" element={<EscrowServicePage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}
export default App;
