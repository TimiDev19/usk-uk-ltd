import './App.css'
import Navbar from './components/Navbar'
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Footer from './components/Footer';
import Aboutpage from './pages/Aboutpage';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path='/about' element={<Aboutpage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
