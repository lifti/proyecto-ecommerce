
import Navbar from './Sesiones/Navbar';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Componentes/Home';
import Login from './Componentes/Login';
import Signup from './Componentes/Signup';

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
