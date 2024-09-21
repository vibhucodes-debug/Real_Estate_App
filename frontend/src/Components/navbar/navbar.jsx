import './navbar.css'

const Navbar =()=>{


    return (
        <div class="navbar">
                <div class="logo"><span>real</span><span>tor.com</span></div>    
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
    )
}


export default Navbar