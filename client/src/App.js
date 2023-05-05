import { Route } from 'react-router-dom';
import './App.css';
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
        <Route path="/detail" element={<Detail />} />;
        <Route path="/create" element={<Form />} />;
      </Routes>

    </div>
  );
}

export default App;
