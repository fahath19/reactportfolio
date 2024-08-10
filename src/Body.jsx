import React from 'react'
import Header from './COMPONENTS/Header'
import Indroduce from './COMPONENTS/Indroduce'
import About from './COMPONENTS/About'
import Skill from './COMPONENTS/Skill'
import Myeducation from './COMPONENTS/Myeducation'
import Contact from './COMPONENTS/Contact'
import './animationstyling/ani.css'
import Footer from './COMPONENTS/Footer'
import Project from './COMPONENTS/Project'
const Body = () => {
  return (
    <div>
      <Header/>
      <Indroduce/>
       <About/>
       <Skill/>
       <Myeducation/>
       <Project/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default Body
