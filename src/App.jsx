import React from 'react'
import '../src/App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Mid from './components/Mid/Mid'
import LangSkills from './components/LangSkills/LangSkills'

const App = () => {
  return (
    <div className='container'>
      <div className='border'>
        <div className="page">
            <Header/>
            <About/>
            <Mid />
            <LangSkills />
        </div>
      
    </div>
    </div>
  )
}

export default App
