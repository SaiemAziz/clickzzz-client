import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  let [theme, setTheme] = useState(true)

  return (
    <div className="App" data-theme={theme ? 'luxury' : 'pastel'}>
      <div className='max-w-7xl flex flex-col justify-between min-h-screen'>

      </div>
    </div>
  );
}

export default App;
