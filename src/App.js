import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import CharacterList from './components/CharacterList/CharacterList';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={CharacterList} />
      <Route exact path="/detail/:id" component={CharacterDetail} />
    </React.Fragment>
  )
}
export default App;