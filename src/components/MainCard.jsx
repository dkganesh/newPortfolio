import React, { useState } from 'react'
import About from './About'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import { Link, Route, Routes } from 'react-router-dom'
import { Navbar } from './Navbar'

export const Maincard = () => {
    const [active,setActive]=useState('about')
  return (
    <>
        <div className=" dk-main-container">
            {/* <About/> 
            <Experience/>
            <Skills/>
            <Projects  /> */}
            {/* <Navbar/> */}
            <Routes>
                <Route path='/' element={<About/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/experience' element={<Experience/>}></Route>
                <Route path='/skills' element={<Skills/>}></Route>
                <Route path='/projects' element={<Projects/>}></Route>
            </Routes>
            <Navbar/>
        </div>
    </>
  )
}
