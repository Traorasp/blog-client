import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return (
    <div>
        <h1 id='home-title'>Welcome to Trao Blogs</h1>
        <div class='background'>
            <Link to="/posts" id='link-post'>Visit Posts!</Link>
            <h2 id='about'>About</h2>
            <p class='text'>This is a bloggging website ecreated to test out an API.</p>
        </div>
    </div>
    );
}

export default Home;
