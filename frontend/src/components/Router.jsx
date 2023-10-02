import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "../containers/HomePage";
import GalleryPage from "../containers/GalleryPage";
import LoginPage from "../containers/LoginPage";
import CreateInspoPage from "../containers/CreateInspoPage";

export default function Router({ user }) {
  const location = useLocation();
  console.log(location);

  return (
    <Routes>
      <Route index Component={HomePage} />
      <Route path="home" Component={HomePage} />
      <Route path="login" Component={LoginPage} />
      <Route path="gallery" Component={GalleryPage} />
      <Route path="create" element={user ? <CreateInspoPage /> : <Navigate to="/login" state={{ from: location }} />} />
    </Routes>
  );
}
