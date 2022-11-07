import {Outlet} from 'react-router-dom'
import './App.css';
import {useState} from 'react'
import { useTitle } from './routes/useTitle';
import Header from './shared/Header';

function App() {
  useTitle('');

  let [theme, setTheme] = useState(false)

  return (
    <div className="App" data-theme={theme ? 'luxury' : 'winter'}>
      <div className='max-w-7xl flex flex-col justify-between min-h-screen mx-auto'>
        <Header/>
        <Outlet/>

      </div>
    </div>
  );
}

export default App;
