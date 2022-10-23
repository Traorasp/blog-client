import React, {useState, useEffect} from 'react';

function Comment(props) {

    useEffect(() => {
        adjustDate(props.comment.date);
    }, [])

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

        setDate(year+'/' + month + '/'+dt);
    }

    return (
        <div class='comment'>
            <h4>Posted: {date}</h4>
            <p>{props.comment.comment}</p>
        </div>
    );
}

export default Comment;
