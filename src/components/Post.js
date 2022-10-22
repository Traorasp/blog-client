import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import Comment from './Comment';
import CommentForm from './CommentForm';

function Post() {

    const {id} = useParams();
    
    const [date, setDate] = useState(String);
    const [post, setPost] = useState({});
    const [form, setForm] = useState(true);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchPost();
        fetchComments();
    }, [])

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

        setDate(year+'/' + month + '/'+dt);
    }

    const fetchPost = async () => {
        const data = await fetch(`https://blog-api-122.herokuapp.com/catalog/post/${id}`);
        const postDetails = await data.json();
        adjustDate(postDetails.post.date);
        setPost(postDetails.post);
    }

    const fetchComments = async () => {
        const data = await fetch(`https://blog-api-122.herokuapp.com/catalog/comment/${id}`);
        const postComments = await data.json();

        setComments(postComments.comments);
    }

    const showForm = () => {
        setForm(!form);
    }

    return (
        <div>
            <Link to="/posts"><h2>Back</h2></Link>
            <h1>{post.title}</h1>
            <h4>{date}</h4>
            <p>{post.content}</p>
            <div>
                <h3>Comments</h3>
                <button onClick={showForm}>Add Comment</button>
                {form ? <CommentForm setComments={setComments} postID={`${id}`} /> : ""}
                {comments.map(comment => {
                    return <Comment key={`${comment._id}`} comment={comment} />
                })}
            </div>
        </div>
    );
}

export default Post;
