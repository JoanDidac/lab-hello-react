// import logo from './images/ironhack-logo-xs.png';
// import menu from './images/menu-top-xs.png';
import './App.css';
import Navbar from '../src/components/Navbar';
import Header from './components/Header';
import Snippets from './components/Snippets';
import Button from './components/Button';


const App = () => {

  return (
<>
    <div className="App">
    <Navbar />
    <Header />
    <Button />
      <Snippets />
      
    </div>
    </>
  );
}

export default App;
