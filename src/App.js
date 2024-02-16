import ProductPage from "./components/ProductPage/ProductPage";
import EscrowServicePage from "./pages/EscrowServicePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/escrowService" element={<EscrowServicePage />} />
            <Route path="/Product-detail" element={<ProductPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}
export default App;
