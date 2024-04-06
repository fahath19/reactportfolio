import React from 'react'
import Header from './COMPONENTS/Header'
import Indroduce from './COMPONENTS/Indroduce'
import About from './COMPONENTS/About'
import Skill from './COMPONENTS/Skill'
import Myeducation from './COMPONENTS/Myeducation'
import Contact from './COMPONENTS/Contact'
import './animationstyling/ani.css'
const Body = () => {
  return (
    <div>
      <Header/>
      <Indroduce/>
       <About/>
       <Skill/>
       <Myeducation/>
       <Contact/>
    </div>
  )
}

export default Body
