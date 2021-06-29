
import './App.css';
import Home from './Componentes/Home';
import Login from './Componentes/Login';
import Signup from './Componentes/Signup';
import Navbar from './Sesiones/Navbar';

function App() {
  return (
    <div>
      <h1>E-Commerce</h1>

      <Navbar></Navbar>
      <Home></Home>
      <Signup></Signup>
      <Login></Login>

    </div>

  );
}

export default App;
