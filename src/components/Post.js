import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';

function Post() {

    const {id} = useParams();

    useEffect(() => {
        fetchPost();
    }, [])

    const [date, setDate] = useState(String);
    const [post, setPost] = useState({});

    const adjustDate = (oldDate) => {
        const newDate = new Date(oldDate);
        let year = newDate.getFullYear();
        let month = newDate.getMonth()+1;
        let dt = newDate.getDate();

        if (dt < 10) {
        dt = '0' + dt;
        }
        if (month < 10) {
        month = '0' + month;
        }

        setDate(year+'-' + month + '-'+dt);
    }

    const fetchPost = async () => {
        const data = await fetch(`https://blog-api-122.herokuapp.com/catalog/post/${id}`);
        const postDetails = await data.json();

        setPost(postDetails.post);
        adjustDate(post.date);
    }

    return (
        <div>
            <Link to="/posts"><h2>Back</h2></Link>
            <h1>{post.title}</h1>
            <h3>{date}</h3>
            <p>{post.content}</p>
        </div>
    );
}

export default Post;
