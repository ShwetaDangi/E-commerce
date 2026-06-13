import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Welcome to shweta's crochet house</h1>
            <Link to="/shop" className="btn">Start Shopping</Link>
        </div>
    )
}

export default Home;