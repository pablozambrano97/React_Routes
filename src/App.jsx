import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './views/NavBar';
import Home from './views/Home';
import Contact from './views/Contact';
import NotFound from './views/NotFound';


function App() {

  return (
    <>
      <BrowserRouter >
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
