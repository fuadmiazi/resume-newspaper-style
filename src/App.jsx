import React from 'react'
import '../src/App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Mid from './components/Mid/Mid'
import LangSkills from './components/LangSkills/LangSkills'
import Reference from './components/Reference/Reference'
import Name from './components/Name/Name'
import Contact from './components/Contact/Contact'
import resume_pdf from './assets/fuad-hasan.pdf'
import Certifications from './components/Certifications/Certifications'

const App = () => {

  const downloadFile = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download",fileName);
    aTag.click();
    aTag.remove();
  };



  return (
    <div className='container'>
      <div className="download">
        <button onClick={()=>{downloadFile(resume_pdf)}}>Download Resume</button>
      </div>
      <div className='border'>
        <div className="page">
            <Header/>
            <About/>
            <Mid />
            <LangSkills />
            <Reference/>
            <Name/>
        </div>

        <div className="certification-page">
            <Certifications />
        </div>

        <div className="contact-page">
            <Contact/>
        </div>
      
    </div>
    </div>
  )
}

export default App
