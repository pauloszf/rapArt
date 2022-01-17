import { BrowserRouter } from "react-router-dom";

import Menu from "./Components/Menu";
import Routes from "./Routes";

import './css/App.css';
import 'primeflex/primeflex.css';
import "primereact/resources/themes/md-dark-indigo/theme.css";
import "primeicons/primeicons.css";
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
