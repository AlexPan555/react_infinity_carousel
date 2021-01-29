import './App.css';
import './carousel.css'
import MyCarousel from './Carousel'
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <h1>Infinity Carousel</h1>
      <div className='app_body'>
        <MyCarousel />
      </div>
        <Footer />
    </div>
  );
}

export default App;
