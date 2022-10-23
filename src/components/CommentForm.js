import React, {useState} from 'react';
import axios from "axios";

function CommentForm(props) {

    const [comment, setComment] = useState(String);

    const sendForm = (event) => {
        const url = `https://blog-api-122.herokuapp.com/catalog/comment/${props.postID}/create`;
        event.preventDefault();
    
        axios
            .post(url, {comment})
            .then((res) => {
                console.log(res);
                fetchComments()        
            })
            .catch((err) => {
                console.error(err);
            });
            setComment("");
    }

    const fetchComments = async () => {
        const data = await fetch(`https://blog-api-122.herokuapp.com/catalog/comment/${props.postID}`);
        const postComments = await data.json();

        props.setComments(postComments.comments);
    }

    const setForm = (event) => {
        setComment(event.target.value);
    }

    return (
        <div>
            <form id='Comment-Form' onSubmit={sendForm} method="post">
                <label htmlFor='Comment-Input'>Comment:</label>
                <input type='text' id='Comment-Input' name='comment' minLength={1} value={comment} onChange={setForm} required></input>
                <button type='submit' class='comment-btn'>Post</button>
            </form>
        </div>
    );
}

export default CommentForm;
