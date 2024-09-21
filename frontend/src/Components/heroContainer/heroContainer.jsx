import './heroContainer.css'

const HeroContainer =()=>{


    return(
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
                    <input type="text" autoFocus placeholder="Address, School, City, Zip or Neighborhood"/>
                </div>
            </div>
            </div>
    )
}

export default HeroContainer