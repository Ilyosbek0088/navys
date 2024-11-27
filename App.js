import React from 'react'
import Nav from './components/navbar'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.js'
import Contact from './pages/contact/contact.js'
import Lessons from './pages/lessons/lessons.js'
import About from './pages/about/about.js'


function App()

{
    return(
        <div >
            <Nav/>


            <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/lessons" element={<Lessons/>}/>
<Route path="*" element={<h1>404 - Page not Found</h1>}/>
</Routes>
        </div>
    )
}

export default App;