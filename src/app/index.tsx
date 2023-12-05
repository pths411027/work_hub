import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/Home';
import LoginIn from '../pages/Login';
import Layout from '../components/Layout';
import PaperPage from '../pages/Paper';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="paper" element={<PaperPage />} />
      </Route>
      <Route path="login" element={<LoginIn />} />
    </Routes>
  );
}

export default App;
