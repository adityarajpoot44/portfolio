
import './App.css';
import Header from './component/Header.js';
import Myvideo from './component/Myvideo.js';
import About from './component/pages/About.js';
import Contact from './component/pages/Contact.js';
import Project from './component/pages/Project.js';
import Resume from './component/pages/Resume.js';
import Home from './component/pages/Home.js';
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
