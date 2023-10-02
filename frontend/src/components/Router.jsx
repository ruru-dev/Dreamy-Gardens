import { Routes, Route } from 'react-router';
import HomePage from '../containers/HomePage';
import GalleryPage from '../containers/GalleryPage';
import LoginPage from '../containers/LoginPage';
import CreateInspoPage from '../containers/CreateInspoPage';

export default function Router() {
  return (
    <Routes>
      <Route index Component={HomePage}/>
      <Route path='home' Component={HomePage}/>
      <Route path="login" Component={LoginPage} />
      <Route path="gallery" Component={GalleryPage}/>
      <Route path="create" Component={CreateInspoPage}/>
    </Routes>
  );
}