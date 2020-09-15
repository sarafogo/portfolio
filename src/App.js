import React from 'react';
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Skills from './pages/Skills/Skills';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <div>

          <NavBar />

          <Route exact path='/' render={() => <Home />} />
          <Route path='/projetos' render={() => <Projects />} />
          <Route path='/habilidades' render={() => <Skills />}  /> */}
          </div>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
