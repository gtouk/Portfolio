import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/index'
import About from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Freelancers from './pages/Freelancers'
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
   div {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
   }
`

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
          <GlobalStyle/>
          <Header/>
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/learn' element={<About/>}/>
            <Route element={<Error/>} path='*'/>
            <Route element={<Freelancers/>} path='/contact'/>
          </Routes>
         </Router>
    </React.StrictMode>,

)

