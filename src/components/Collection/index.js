import React from "react";
import "./style.css"
import { Link } from "react-router-dom";


const Collection = () => {

    return (
        <div>
            <ul className="collection-category">
                <li>
                    <div className="for-him">
                        <img src="https://www.rankandstyle.com/media/lists/m/mens-wardrobe-essentials-on-amazon_0RzIAuQ.jpg" alt="mens-collection"></img>
                        <button className="for-him-btn"><Link to="/collection/forhim" style={{ textDecoration: 'none' }}>For Him</Link></button>
                    </div>
                </li>
                <li>
                    <div className="for-her">
                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/images/1407-peace1-1492647841.jpg?resize=480:*" alt="womens-collection"></img>
                        <button className="for-her-btn"><Link to="/collection/forher" style={{ textDecoration: 'none' }}>For Her</Link></button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Collection;

