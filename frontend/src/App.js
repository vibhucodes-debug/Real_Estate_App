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
            
            <div className="hero-container-primary">
                <div className="hero-container-secondary">
                <div className="hero-heading">
                    <h1>The #1 site real estate</h1>
                    <h1>professionals trust*</h1>
                </div>
                <ul className="hero-navigation-list">
                    <li className="navigation-list-item">Buy</li>
                    <li className="navigation-list-item">Sell</li>
                    <li className="navigation-list-item">Rent</li>
                    <li className="navigation-list-item">Pre-approval</li>
                    <li className="navigation-list-item">Just sold</li>
                    <li className="navigation-list-item">Home value</li>    
                </ul>
                <div className="hero-search">
                    <input type="text" placeholder="Address, School, City, Zip or Neighborhood"/>
                </div>
            </div>
            </div>
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
