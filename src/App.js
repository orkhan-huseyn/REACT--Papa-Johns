import { Switch, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Menu from './components/pages/Menu';
import Restaurants from './components/pages/Restaurants';


function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/menu'>
          <Menu />
        </Route>
        <Route path='/restaurants'>
          <Restaurants />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;