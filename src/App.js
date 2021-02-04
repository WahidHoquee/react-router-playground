import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Navigation from './nav';
import About from './pages/About';
import Home from './pages/Home';
import Shop from './pages/Shop';


const App = () => {
  return (
    <BrowserRouter>
      <div className="">
        <Navigation/>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />         
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
