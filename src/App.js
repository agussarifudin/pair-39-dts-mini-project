
import './App.css';
import Home from './containers/Home'
import Navbar from './components/Navbar'

function App() {
 localStorage.setItem('login',true)
  return (
    <div className="App">
       <Navbar/>
    <Home />
   
    </div>
  );
}

export default App;
