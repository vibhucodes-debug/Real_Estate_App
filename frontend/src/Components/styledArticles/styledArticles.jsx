import "./styledArticles.css"
import styledArticleImage1 from "../../assets/images/styled-article1.jpg"
import styledArticleImage2 from "../../assets/images/styled-article2.jpg"
import styledArticleImage3 from "../../assets/images/styled-article3.jpg"
import styledArticleImage4 from "../../assets/images/styled-article4.jpg"

const StyledArticles = () => {


    return (
        <div className="styled-article-container">
                <div className="styled-article-card">
                    <div className="styled-article-image" style={{backgroundImage:`URL(${styledArticleImage1})`}}></div>
                    <div className="styled-article-text">
                        Mortgage Rates Dive to 6.09% as Housing Market Shows 'Sense of...
                    </div>
                </div>

                <div className="styled-article-card">
                    <div className="styled-article-image" style={{backgroundImage:`url(${styledArticleImage2})`}}></div>
                    <div className="styled-article-text">Boomers Own 38% of America's Homes-but More than Half...</div>
                </div>

                <div className="styled-article-card">
                    <div className="styled-article-image" style={{backgroundImage:`url(${styledArticleImage3})`}}></div>
                    <div className="styled-article-text">The Magic Mortgage Rate That Cloud Psychologically Jump-Sta...</div>
                </div>

                <div className="styled-article-card">
                    <div className="styled-article-image" style={{backgroundImage:`url(${styledArticleImage4})`}}></div>
                    <div className="styled-article-text">Mira Sorvino's Design Request Gets Flat-Out Denied On...</div>
                </div>

        </div>
    )
}

export default StyledArticles