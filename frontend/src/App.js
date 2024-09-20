import './App.css';
import BrowseHouses from './Components/Browse Houses/BrowseHouses';

function App() {
  return (
    <div className="App">
          <div className="hero-image-container"></div>
    <div className="hero-image-container-filter"></div>
    <div className="supreme-container">
        <header>
            <div className="navbar">
                <div className="logo"><h2>realtor.com</h2></div>    
                <ul className="navigation-list">
                    <li className="navigation-list-item">Buy</li>
                    <li className="navigation-list-item">Sell</li>
                    <li className="navigation-list-item">Rent</li>
                    <li className="navigation-list-item">Mortgage</li>
                    <li className="navigation-list-item">Find realtors</li>
                    <li className="navigation-list-item">My Home</li>
                    <li className="navigation-list-item">News & Insights</li>   
                </ul>
                <div className="navbar-login-signup-btn">
                    <button>Log in</button>
                    <button>Sign up</button>
                </div>
            </div>
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
        </main>
        <footer></footer>
    </div>  
    </div>
  );
}

export default App;
