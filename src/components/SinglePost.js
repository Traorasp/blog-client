import { Link } from "react-router-dom";
import React, {useState, useEffect} from 'react';

function SinglePost(props) {

    useEffect(() => {
        adjustDate(props.post.date);
    })

    const [date, setDate] = useState(String);

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

    return (
        <div class='text' >
            <Link to={`/posts/${props.post._id}`} class='post-info'>
                <h3>{props.post.title}</h3>
                <h4>{date}</h4>
            </Link>
        </div>
    );
}

export default SinglePost;
