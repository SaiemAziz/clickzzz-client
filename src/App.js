import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  let [theme, setTheme] = useState(true)

  return (
    <div className="App min-h-screen" data-theme={theme ? 'luxury' : 'pastel'}>
      
    </div>
  );
}

export default App;
