import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Detail, Form, Landing } from "./pages"
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
        <Route path="/detail/:idRecipe" element={<Detail />} />;
        <Route path="/create" element={<Form />} />;
      </Routes>
     
    </div>
  );
}

export default App;
