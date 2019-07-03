import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux"; 
import store from './store'

import './App.css';
import CharacterList from './components/CharacterList/CharacterList';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';

import saga from './sagas'
import { sagaMiddleware } from './middleware'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={CharacterList} />
        <Route exact path="/detail/:id" component={CharacterDetail} />
      </Router>
    </Provider>
  )
}
export default App;

sagaMiddleware.run(saga);