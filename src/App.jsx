import React from 'react'
import '../src/App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Mid from './components/Mid/Mid'
import LangSkills from './components/LangSkills/LangSkills'
import Reference from './components/Reference/Reference'
import Name from './components/Name/Name'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div className='container'>
      <div className='border'>
        <div className="page">
            <Header/>
            <About/>
            <Mid />
            <LangSkills />
            <Reference/>
            <Name/>
        </div>

        <div className="page-2">
            <Contact/>
        </div>
      
    </div>
    </div>
  )
}

export default App
