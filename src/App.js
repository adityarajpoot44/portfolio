
import './App.css';
import Header from './component/Header.js';
import Myvideo from './component/Myvideo.js';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <Outlet/>
      <Myvideo />
    </>
  );
}

export default App;
