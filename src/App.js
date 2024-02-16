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
    </>
  );
}
export default App;
