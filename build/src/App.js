import './App.css';
import "./components/header/navbar.css";
import Navbar from './components/header/Navbar';
import Search from './components/search/Search';
import Footer from './components/header/footer/Footer';



function App() {

  return (
<div>
  <Navbar/>
  <Search/>
  <Footer/>
</div>
  )
}

export default App;
