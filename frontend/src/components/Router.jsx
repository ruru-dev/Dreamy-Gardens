import { Routes, Route } from 'react-router';
import HomePage from '../containers/HomePage';
import GalleryPage from '../containers/GalleryPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="gallery" Component={GalleryPage}/>
    </Routes>
  );
}