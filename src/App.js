import {Home} from './pages/Home'
import {Standard} from './pages/Standard'
import {Commander} from './pages/Commander';
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Testing } from './pages/Testing'

function App() {

  let Component
  let componentClassName = ''

  switch(window.location.pathname){
    case "/":
      Component = Home
      document.body.style.background = '#383F51'
    case "/Home":
      Component = Home
      document.body.style.background = '#383F51'
      break
    case "/Commander":
      Component = Commander
      document.body.style.background = '#383F51'
      break
    case "/Standard":
      Component = Standard
      document.body.style.background = '#383F51'
      break
    case "/Testing":
      Component = Testing
      document.body.style.background = '#383F51'
      break
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Navbar/>

      <Component/>
    </div>
  );
}

export default App;
