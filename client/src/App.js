import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from "./pages/landing/Landing"
import Detail from "./pages/detail/Detail"
import Home from "./pages/home/Home"
import Form from "./pages/form/Form"
import NavBar from './components/NavBar/NavBar';
import { useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route exact path="/" element={<Landing />} />;
        <Route path="/home" element={<Home />} />;
        <Route path="/detail/:id" element={<Detail />} />;
        <Route path="/create" element={<Form />} />;
      </Routes>
     
    </div>
  );
}

export default App;
