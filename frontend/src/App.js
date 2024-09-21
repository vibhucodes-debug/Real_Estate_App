import './App.css';
import BrowseHouses from './Components/Browse Houses/BrowseHouses';
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
            <div className="browse-homes-heading">Browse homes in Vero Beach, FL</div>
            <div className="browse-homes"> 
                <BrowseHouses/>
                <BrowseHouses/>
                <BrowseHouses/>
                <BrowseHouses/> 
                <BrowseHouses/>
                <BrowseHouses/>
                <BrowseHouses/>
                <BrowseHouses/>
            </div>
            <div className="discover-help">Discover</div>   
        </main>
        
        <footer></footer>
    </div>  
    </div>
  );
}

export default App;
