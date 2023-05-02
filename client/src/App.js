import { Route } from 'react-router-dom';
import './App.css';
import { Home, Detail, Form, Landing } from "./pages"
import NavBar from './components/NavBar/NavBar';
import { useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();

  return (

    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route path="/home">
        <Home></Home>
      </Route>

      <Route path="/create">
        <Form></Form>
      </Route>

      <Route path="/detail">
        <Detail></Detail>
      </Route>

      <Route exact path="/">
        <Landing></Landing>
      </Route>

    </div>
  );
}

export default App;
