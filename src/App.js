import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Nopage from './components/Nopage';
import Mobile from './components/Mobile';
import Email from './components/Email';
import Users from './components/Users';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} >
            <Route index element={<Email/>}/>
            <Route path='mobile' element={<Mobile/>} />
            <Route path='email' element={<Email/>} />
          </Route>
          <Route path='/users/:id' element={<Users/>}/>
          <Route path='blog' element={<Blog />} />
          <Route path='*' element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App