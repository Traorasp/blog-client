import React, {useState, useEffect} from 'react';
import SinglePost from './SinglePost';

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
            <h1>Posts</h1>
            <div>
                {posts.map(post => {
                    return <SinglePost post={post} key={post._id} />
                })}
            </div>
        </div>
    );
}

export default Posts;
