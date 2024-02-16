
import './App.css';
import UserProfile from './pages/UserProfile/UserProfile';
import EscrowServicePage from "./pages/EscrowServicePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/escrowService" element={<EscrowServicePage />} />
           <Route path="/escrowService" element={<UserProfile/>} />
          </Routes>
        </main>
      </BrowserRouter>
  );
}
export default App;
