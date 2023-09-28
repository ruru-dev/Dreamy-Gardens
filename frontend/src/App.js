import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
import Navbar from "./containers/Navbar";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
