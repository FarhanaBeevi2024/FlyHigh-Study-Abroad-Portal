import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Programs from './pages/Programs'
import PageNotFound from './pages/PageNotFound'
import Auth from './pages/Auth'
import Footer from './components/Footer'
import Header from './components/Header'
import Application from './components/Application'



function App() {
 
  return (
   <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/programs' element={<Programs/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth register/>}/>
      <Route path='/application' element={<Application/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>

    <Footer/>

    </>
  )
}

export default App
