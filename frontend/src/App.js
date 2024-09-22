import './App.css';
import Navbar from './Components/navbar/navbar.jsx'
import HeroContainer from './Components/heroContainer/heroContainer.jsx'
import BrowseHouses from './Components/browse Houses/BrowseHouses.jsx';
import DiscoverHelp from './Components/discoverHelp/discoverHelp.jsx';
import ReadArticle from './Components/readArticle/readArticle.jsx';
import StyledArticles from './Components/styledArticles/styledArticles.jsx';

function App() {
    return (
        <div className="App">

            <div className="hero-image-container"></div>
            <div className="hero-image-container-filter"></div>
            <div className="supreme-container">

                <header>
                    <Navbar />
                </header>

                <main>
                    <HeroContainer />
                    <div className="browse-homes-heading">Browse homes in Vero Beach, FL</div>
                    <div className="browse-homes">
                        <BrowseHouses />
                        <BrowseHouses />
                        <BrowseHouses />
                        <BrowseHouses />
                        <BrowseHouses />
                        <BrowseHouses />
                        <BrowseHouses />
                        <BrowseHouses />
                    </div>
                    <DiscoverHelp />


                </main>

                <footer></footer>
            </div>
            <ReadArticle />
            <StyledArticles />
        </div>
    );
}

export default App;
