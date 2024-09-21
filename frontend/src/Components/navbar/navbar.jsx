import './navbar.css'

const Navbar =()=>{


    return (
        <div className="navbar">
                <div className="logo"><span>real</span><span>tor.com</span></div>    
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
    )
}


export default Navbar