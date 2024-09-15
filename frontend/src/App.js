import './App.css';

function App() {
  return (
    <div className="App">
          <div class="hero-image-container"></div>
    <div class="hero-image-container-filter"></div>
    <div class="supreme-container">
        <header>
            <div class="navbar">
                <div class="logo"><h2>realtor.com</h2></div>    
                <ul class="navigation-list">
                    <li class="navigation-list-item">Buy</li>
                    <li class="navigation-list-item">Sell</li>
                    <li class="navigation-list-item">Rent</li>
                    <li class="navigation-list-item">Mortgage</li>
                    <li class="navigation-list-item">Find realtors</li>
                    <li class="navigation-list-item">My Home</li>
                    <li class="navigation-list-item">News & Insights</li>   
                </ul>
                <div class="navbar-login-signup-btn">
                    <button>Log in</button>
                    <button>Sign up</button>
                </div>
            </div>
        </header>
        
        <main>
            
            <div class="hero-container-primary">
                <div class="hero-container-secondary">
                <div class="hero-heading">
                    <h1>The #1 site real estate</h1>
                    <h1>professionals trust*</h1>
                </div>
                <ul class="hero-navigation-list">
                    <li class="navigation-list-item">Buy</li>
                    <li class="navigation-list-item">Sell</li>
                    <li class="navigation-list-item">Rent</li>
                    <li class="navigation-list-item">Pre-approval</li>
                    <li class="navigation-list-item">Just sold</li>
                    <li class="navigation-list-item">Home value</li>    
                </ul>
                <div class="hero-search">
                    <input type="text" placeholder="Address, School, City, Zip or Neighborhood"/>
                </div>
            </div>
            </div>
            <div class="browse-homes">Browse</div>
            <div class="discover-help">Discover</div>   
        </main>
        <footer></footer>
    </div>  
    </div>
  );
}

export default App;
