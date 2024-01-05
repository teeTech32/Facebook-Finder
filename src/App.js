import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";
import Home from './components/pages/Home';
import Notfound from './components/pages/Notfound';
import About from './components/pages/About';
import {FaceProvider} from './context/face/FaceContext'
function App() {
  return (   
    <FaceProvider>
      <Router>
        <div className="flex flex-col justify-between   h-screen">
          <Navbar/>
          <main className='container mx-auto pb-10 px-3'>
            <Routes>
              <Route path='/About' element={<About/>}/>
              <Route path='/Notfound' element={<Notfound/>}/>
              <Route path='/*' element={<Notfound/>}/>
              <Route path='/' element={<Home/>}/>
            </Routes>
          </main>
          <Footer/>
        </div>
      </Router> 
    </FaceProvider>
  
     
        
   
  );
}

export default App;
