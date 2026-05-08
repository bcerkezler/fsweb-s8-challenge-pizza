import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Order from './pages/Order';
import Success from './pages/Success';

function App() {

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/order">
        <Order />
      </Route>
      <Route path="/success">
        <Success />
      </Route>
    </Switch>
  );
}

export default App
