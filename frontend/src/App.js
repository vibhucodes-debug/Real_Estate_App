import './App.css';
import Navbar from './components/navbar/navbar.jsx'
import HeroContainer from './components/heroContainer/heroContainer.jsx'

function App() {
  return (
    <div className="App">
        
        <div class="hero-image-container"></div>
        <div class="hero-image-container-filter"></div>
        <div class="supreme-container">

        <header>
           <Navbar/>
        </header>
        
        <main>
            
            <HeroContainer/>
            <div class="browse-homes">Browse</div>
            <div class="discover-help">Discover</div>   
        </main>
        <footer></footer>
    </div>  
    </div>
  );
}

export default App;
