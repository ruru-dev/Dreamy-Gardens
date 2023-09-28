import { Routes, Route } from 'react-router';
import HomePage from '../components/HomePage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" Component={HomePage}/>
    </Routes>
  );
}