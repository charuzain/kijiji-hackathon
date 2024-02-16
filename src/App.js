import './App.scss';
import UserProfile from './pages/UserProfile/UserProfile';
import Social from './pages/Social/Social';

import EscrowServicePage from './pages/EscrowServicePage';
import ProductPage from './pages/ProductPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product" element={<ProductPage />} />
        <Route path="/social" element={<Social />} />
        <Route path="/escrowService" element={<EscrowServicePage />} />
        <Route path="/" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
