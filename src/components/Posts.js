import React, {useState, useEffect} from 'react';
import SinglePost from './SinglePost';
import { Link} from 'react-router-dom';

function Posts() {

    useEffect(() => {
        fetchPosts();
    }, [])

    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const data = await fetch("https://blog-api-122.herokuapp.com/");
        
        const allPosts = await data.json();

        setPosts(allPosts.posts);
    }
    return (
        <div>
            <Link to="/"><h2 class='back'>Back</h2></Link>
            <div class='background'>
                <h1 class='title'>Posts</h1>
                <div>
                    {posts.map(post => {
                        return <SinglePost post={post} key={post._id} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default Posts;
