import './discoverHelp.css'

const DiscoverHelp = () => {


    return (
        <div className="discover-help-container">
            <h2>Discover how can we help you</h2>
            <div className="discover-options">
                <button className="discover-options-item">Buying</button>
                <button className="discover-options-item">Selling</button>
                <button className="discover-options-item">Renting</button>
            </div>
            <div className="discover-cards">
                <div className="discover-card">
                    <div>ICON</div>
                    <div>
                        <h3>Find how much you can afford</h3>
                        <p>We can help you find your budget range.</p>
                        <h3>Try our affordability calculator</h3>
                    </div>
                </div>
                <div className="discover-card">
                    <div>ICON</div>
                    <div>
                        <h3>Undrestand your monthly costs</h3>
                        <p>Get an in-depth look at your monthly and closing costs.</p>
                        <h3>Try our mortgage calculator</h3>
                    </div></div>
                <div className="discover-card">
                    <div>ICON</div>
                    <div>
                        <h3>Get help with your down payment</h3>
                        <p>You may be able to buy a home with just 3.5% down</p>
                        <h3>Find down payment help</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscoverHelp