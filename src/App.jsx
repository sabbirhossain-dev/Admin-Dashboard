import React, { useState } from 'react'
import Header from './components/header/Header'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import DashBoard from './components/pages/dashPage/Dashboard'
import Inbox from './components/pages/Inbox'
import Users from './components/pages/Users'
import Products from './components/pages/Products'
import SignIn from './components/pages/SignIn'
import SignOut from './components/pages/SignOut'
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/Contents/Main';
import Content from './components/Contents/Content';

const App = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);
  

  const toggleDarkMode =()=>{
    setDarkMode(!darkMode)
  }

  // const toggleMenuBar = ()=>{
  //   setIsMenuBarOpen(!isMenuBarOpen)
  //   console.log("first")
  // }
  return (
    <>
      <div className={`${darkMode && "dark" } bg-gray-100 dark:bg-gray-900 overflow-hidden`}>

        <BrowserRouter>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} isMenuBarOpen={isMenuBarOpen} setIsMenuBarOpen={setIsMenuBarOpen}/>
         
         <div className='sm:flex'>
           <Sidebar isMenuBarOpen={isMenuBarOpen}/>
          <Routes>
            <Route path="/" element={<DashBoard />}/>
            <Route path="/inbox" element={<Inbox />}/>
            <Route path="/users" element={<Users />}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/signin" element={<SignIn />}/>
            <Route path="/signout" element={<SignOut />}/>
          </Routes>


          <Main>
          
          </Main>
         </div>

        </BrowserRouter>

      </div>

    </>
  )
}

export default App