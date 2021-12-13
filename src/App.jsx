import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route, Redirect } from 'react-router-dom';
// Pages Landing
import Home from './pages/Home'
import MenuEs from './pages/MenuEs'

// Componentes 
import { Footer } from './componentes/footer/Footer';
import { SubHeader } from './componentes/header/SubHeader';


function App() {

  return (
    <div className="footer-fix">
      <SubHeader/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/menuespañol">
          <MenuEs />
        </Route>

        <Route path="/404">
          404
        </Route>

        <Route path="*">
          <Redirect to="/404" />
        </Route>

      </Switch>
      <Footer />
    </div>

  );
}

export default App;

