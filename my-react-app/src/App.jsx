import React from 'react'
import Header from './components/header-footer/Header'
import Footer from './components/header-footer/Footer';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects'
import './App.css'
const App = () => {
  return (
    <div >
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />       
      </Routes>
      <Footer />

    </div>
  )
}

export default App
