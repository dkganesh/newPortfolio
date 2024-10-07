import React, { useState } from 'react'
import About from './About'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import {Route, Routes } from 'react-router-dom'
import { Navbar } from './Navbar'
import Contact from './Contact'

export const Maincard = () => {
    const [active,setActive]=useState('about')
  return (
    <>
        <div className=" dk-main-container lg:w-6/12 md:w-6/12 lg:shadow-2xl md:shadow-2xl lg:rounded-xl md:rounded-xl" >
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
                <Route path='/contact' element={<Contact/>}></Route>
            </Routes>
            <Navbar/>
        </div>
    </>
  )
}
