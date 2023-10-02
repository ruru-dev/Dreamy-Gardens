import { Routes, Route } from "react-router-dom";
import HomePage from "../containers/HomePage";
import GalleryPage from "../containers/GalleryPage";
import LoginPage from "../containers/LoginPage";
import CreateInspoPage from "../containers/CreateInspoPage";
import RegistrationPage from "./RegistrationPage";

export default function Router({ user }) {
  return (
    <Routes>
      <Route index Component={HomePage} />
      <Route path="home" Component={HomePage} />
      <Route path="gallery" Component={GalleryPage} />
      <Route path="login" Component={!user ? LoginPage : HomePage} />
      <Route path="register" Component={!user ? RegistrationPage : HomePage} />
      <Route path="create" Component={!user ? LoginPage : CreateInspoPage} />
    </Routes>
  );
}
