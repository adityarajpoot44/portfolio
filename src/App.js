
import { createContext, useState } from 'react';
import './App.css';
import Header from './component/Header.js';
import Myvideo from './component/Myvideo.js';
import { Outlet } from 'react-router-dom';

const DataContext = createContext();

function App() {
  const [sharedData, setSharedData] = useState(true);
  return (
    <>
    <DataContext.Provider value={{sharedData,setSharedData}}>
      <Header />
      <Outlet/>
      <Myvideo />
      </DataContext.Provider>
    </>
  );
}

export default App;
export {DataContext};