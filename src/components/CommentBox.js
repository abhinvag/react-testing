import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {saveComment} from "../actions/index";

function CommentBox(){

    const [Comment, setComment] = useState('');
    
    const dispatch = useDispatch();

    function handleChange(event){
        setComment(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        dispatch(saveComment(Comment));
        setComment('');
    }

    return (
       <form onSubmit={handleSubmit}>
           <h4>Add a Comment</h4>
           <textarea
                name="commentBox"
                onChange={handleChange} 
                value={Comment}
           />
           <div>
               <button>Submit Comment</button>
           </div>
       </form>
    )
}

export default CommentBox;