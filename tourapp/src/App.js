import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import SignUp from './routes/SignUp';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/about' element={<About></About>}/>
        <Route path='/service' element={<Service></Service>}/>
        <Route path='/contact' element={<Contact></Contact>}/>
        <Route path='/signUp' element={<SignUp></SignUp>}/>
      </Routes>
     
    
      
      
     
    </div>
  );
}

export default App;
