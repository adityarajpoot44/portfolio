
import { createContext, useEffect, useState } from 'react';
import './App.css';
import Header from './component/Header.js';
import Myvideo from './component/Myvideo.js';
import { Outlet } from 'react-router-dom';
import Loading from './component/pages/Loading.js';

const DataContext = createContext();

function App() {
  const [sharedData, setSharedData] = useState(true);
  const [loading,setloading]=useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setloading(false)
    },5000)
  })

  return (
    <>
    {loading ? <Loading/>:<DataContext.Provider value={{sharedData,setSharedData}}>
      <Header />
      <Outlet/>
      <Myvideo />
      </DataContext.Provider>
      }
    </>
  );
}

export default App;
export {DataContext};