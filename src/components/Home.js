import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return (
    <div>
        <h1>Welcome to Trao Blogs</h1>
        <Link to="/posts">Visit Posts!</Link>
        <h2>About</h2>
        <p>This is a bloggging website ecreated to test out an API.</p>
    </div>
    );
}

export default Home;
