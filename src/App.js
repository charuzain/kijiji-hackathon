import "./App.css";
import EscrowServicePage from "./pages/EscrowServicePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/escrowService" element={<EscrowServicePage />} />
          </Routes>
        </main>
      </BrowserRouter>
      <h1>KIJIJI</h1>
    </>
  );
}

export default App;
