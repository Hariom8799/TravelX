
import './App.css';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <div style={{height:'100px'}} className='my-5'></div>
      <Footer/>
    </div>
  );
}

export default App;
