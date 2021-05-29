const commentsReducer = (state = [], action) => {
    switch(action.type){
        case 'SAVE_COMMENT':
            return [...state, action.payload];
        case 'FETCH_COMMENT':
            const comments = action.payload.data.map(comment => comment.name);
            return [...state, ...comments];
        default:
            return state;
    }
}

export default commentsReducer;