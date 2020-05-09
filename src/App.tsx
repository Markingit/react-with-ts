import React, { useState } from 'react';
import logo from './logo.svg';
import Hello from './components/Hello'
import LikeButton from './components/LikeButton'
import MouseTracker from './components/MouseTracker'

import useMousePosition from './hooks/useMousePosition'
import './App.css';


interface IThemeProps{
  [key: string]: {
    color: string; background: string
  }
}

const themes: IThemeProps = {
  'light': {
    color: '#000',
    background: '#eee'
  },
  'dark': {
    color: '#fff',
    background: '#222'
  }
}
export const ThemeContext = React.createContext(themes.light)
const App: React.FC = () => {
  const [show, setShow] = useState(true)
  const position = useMousePosition()
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick = {() => {setShow(!show)}}>Toggle Tracker</button>
          {/* <Hello message="Hello World" /> */}
          <p>
            X: { position.x }, Y: { position.y } 
          </p>
          <LikeButton />
          {/* { show && <MouseTracker /> } */}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </ThemeContext.Provider>
    </div>
  );
}
// function App() {
  
// }

export default App;
