import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './views/NavBar';
import Home from './views/Home';
import Contact from './views/Contact';
import NotFound from './views/NotFound';


function App() {
const url="/React_Routes/";
  return (
    <>
      <BrowserRouter >
        <NavBar/>
        <Routes>
          <Route path= {url} element={<Home/>}/>
          <Route path={`${url}/Contact`} element={<Contact/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
