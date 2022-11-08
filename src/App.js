import {Outlet} from 'react-router-dom'
import './App.css';
import {useState} from 'react'
import { useTitle } from './routes/useTitle';
import Header from './shared/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  useTitle('');

  let [theme, setTheme] = useState(false)

  return (
    <div className="App" data-theme={theme ? 'luxury' : 'winter'}>

      {/* site shown  */}
      <div className='max-w-7xl flex flex-col  min-h-screen mx-auto'>
        <Header/>
        <Outlet/>

      </div>

      {/* toast  */}
      <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
    </div>
  );
}

export default App;
