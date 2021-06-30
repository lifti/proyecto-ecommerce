
import './App.css';
import Home from './Componentes/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './Componentes/Login';
import Signup from './Componentes/Signup';
import Navbar from './Sesiones/Navbar';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
      <h1>E-Commerce</h1>

      <Switch>
        <Route exact path="/signup" component={Signup}/>

        <Route exact path="/home" component={Home}/>

        <Route exact path="/login" component={Login}/>

      </Switch>
    
   

    </BrowserRouter>


     

    </div>

  );
}

export default App;
