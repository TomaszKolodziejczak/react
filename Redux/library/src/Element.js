import React, { useState } from 'react';


const Element = ({ author, comment, rate }) => {
    const [isVisibleForm, setIsVisibleForm] = useState(false)

    const toggleElements = () => setIsVisibleForm(prev => !prev);

    const formOrButtonElement = isVisibleForm
        ? (
            <Form
                author={author}
                callback={toggleElements}
                comment={comment}
                id={id}
                rate={rate}
            />
        ) : (
            <button onClick={toggleElements}>
                Update Book
            </button>
        );


    return (
        <li>
            <p>Author: {author}</p>
            <p>Rate: {rate}</p>
            <p>Comment: {comment}</p>
        </li>
    );
}

export default Element;