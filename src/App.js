import './App.css';
import Slider from './Components/Slider/Slider';
import Footer from './Components/Footer/Footer'
import { Routes,Route } from 'react-router-dom';
import Hatchback from './Components/CarsDisplay/Hatchbacks'
import XYZ from './Components/CarsDisplay/SUV';
import Sedan from './Components/CarsDisplay/Sedan'
import Limo from './Components/CarsDisplay/Limo'
import Navbr from './Components/Navbar/Navbar (3)'
function App() {
  
  return (
    <>
    <Navbr></Navbr>
    <Routes>
      <Route path='/' element={<Slider/>}/>
      <Route path='/SUV' element={<XYZ/>}/>
      <Route path='/Sedan' element={<Sedan/>}/>
      <Route path='/Hatchbacks' element={<Hatchback/>}/>
      <Route path='/Limousine' element={<Limo/>}/>
    </Routes>
     <Footer></Footer>
   </>
  );
}

export default App;




 