import {saveComment} from "../index";

describe('saveComment', () => {
    it('has a correct type', () => {
        const action = saveComment();
        expect(action.type).toEqual('SAVE_COMMENT');
    })

    it('has a correct payload', () => {
        const action = saveComment('New Comment');
        expect(action.payload).toEqual('New Comment');
    })
})

