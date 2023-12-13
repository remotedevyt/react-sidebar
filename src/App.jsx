import { useState } from 'react'
import './App.css';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Main from './layout/Main';
import { Appcontext } from './context/Appcontext'

function App() {

  const defaultAppdata = {
    sidebarVisible:true
  }
  const [appdata,setAppdata] = useState(defaultAppdata);

  return (
    <div className='w-full h-full'>
      <Appcontext.Provider value={{appdata,setAppdata}}>
      <Header></Header>
      <div className='flex'>
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
      </Appcontext.Provider>      
    </div>
  )
}

export default App
