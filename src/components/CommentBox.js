import React, {useState} from 'react'

function CommentBox(){

    const [Comment, setComment] = useState('');

    function handleChange(event){
        setComment(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
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