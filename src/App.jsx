import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route, Redirect } from 'react-router-dom';
// Pages Landing
import Home from './pages/Home'
import MenuEs from './pages/MenuEs'
import MenuEn from './pages/MenuEn';


function App() {

  return (
   
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/menuespañol">
          <MenuEs />
        </Route>

        <Route path="/menuingles">
          <MenuEn />
        </Route>

        <Route path="/404">
          Page not Found 404
        </Route>

        <Route path="*">
          <Redirect to="/404" />
        </Route>

      </Switch>
     

  );
}

export default App;

