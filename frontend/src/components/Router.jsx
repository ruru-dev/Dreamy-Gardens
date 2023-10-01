import { Routes, Route } from 'react-router';
import HomePage from '../containers/HomePage';
import GalleryPage from '../containers/GalleryPage';
import LoginPage from '../containers/LoginPage';

export default function Router() {
  return (
    <Routes>
      <Route path='/' Component={HomePage}/>
      <Route path="login" Component={LoginPage} />
      <Route path="gallery" Component={GalleryPage}/>
    </Routes>
  );
}