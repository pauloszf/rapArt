import { BrowserRouter } from "react-router-dom";

import Menu from "./Components/Menu";
import Routes from "./Routes";

import './css/App.css';
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
