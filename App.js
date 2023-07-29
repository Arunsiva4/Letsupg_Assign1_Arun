// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Navbar from "./Component/Navbar2";
import Footer from './Component/Footer';
//import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p className='xyz'>These are the components of demo1 react</p>
        <button name='ok' style={
          {
            backgroundColor:'yellow'
          }
        }>Submit</button>
        <Navbar/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
