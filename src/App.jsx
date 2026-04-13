
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Details from './pages/Details/Details.jsx'
import Home from './pages/Home/Home.jsx'
import Header from './components/Header/Header.jsx'
import ContactForm from './components/ContactForm/ContactForm.jsx'

function App() {
  return (
   <BrowserRouter>
   <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/:place" element={<Details/>}/>
     </Routes>
     <ContactForm/>
     </BrowserRouter>

  )
}

export default App
