import './App.css';
import Details from './pages/detail/detail';
import Form from './pages/form/form';
import Home from './pages/home/home';
import Landing from './pages/landing/landing';


function App() {
  return (
    <div className="App">
      <Home></Home>
      <Form></Form>
      <Details></Details>
      <Landing></Landing>
    </div>
  );
}

export default App;
