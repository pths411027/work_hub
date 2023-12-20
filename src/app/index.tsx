import {
  Routes, Route, Navigate, useNavigate,
} from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from '../pages/Home';
import LoginIn from '../pages/Login';
import Layout from '../components/Layout';
import ReportPage from '../pages/DataAnalysis';
import PersonalInfo from '../pages/Profile';
import useAuthority from '../stores/Authority';
import TaskTimeLine from '../pages/task';

function App() {
  const navigate = useNavigate();
  const { accessToken } = useAuthority((state) => state);

  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="report/:reportName" element={<ReportPage />} />
        <Route path="profile" element={<PersonalInfo />} />
        <Route path="task" element={<TaskTimeLine />} />
      </Route>
      <Route path="login" element={<LoginIn />} />
    </Routes>
  );
}

export default App;
