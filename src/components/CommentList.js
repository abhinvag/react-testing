import React from 'react'
import {useSelector} from 'react-redux'; 

function CommentList(){

    let comments = useSelector(state => state.comments);
    
    return (
        <div>
            <ul>
                {comments.map((value, key) => {
                    return(
                        <li key={value}>
                            {value}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default CommentList;