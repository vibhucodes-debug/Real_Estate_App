import "./moreInfo.css"
import React from "react";
import image1 from "../../assets/images/More_Info_main1.avif";
import image2 from "../../assets/images/More_info_main2.avif";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const MoreInfo=()=>{

    return(
        <div className="more-info-container">
            <div className="more-info-div">
                <div className="div1-image">
                    <img src={image1} alt="External" />
                </div>
                <div className="div1-content"> 
                    <p>Looking for a loan? Get pre-approved</p>
                    <p>Connect with a lender who can provide competitive mortgage rates and assist you with the pre-approval process.</p>
                    <button>Get pre-approved now</button>
                </div>
            </div>
            <div className="more-info-div">
                <div className="div1-content"> 
                    <p>Get Local Info</p>
                    <p>Do they have pet-friendly rentals? How's the school district? Get key local information about the area you're most interested in.</p>
                    <div className="search-container">
                        <input type="text" placeholder="Address, city, zip or pincode"/>
                        <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </div>
                </div>
                <div className="div1-image">
                    <img src={image2} alt="External" />
                </div>
            </div>
        </div>
           
    )
}

export default MoreInfo;