import React from 'react';
//import ReactDOM from 'react-dom';
import App from 'components/App';
import {shallow} from 'enzyme';
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});

it('shows a comment box', () => {
    
    /*const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    console.log(div.innerHTML);
    expect(div.innerHTML).toContain('Comment Box');
    ReactDOM.unmountComponentAtNode(div);*/
    expect(wrapped.find(CommentBox).length).toEqual(1);
}) 

it('shows a comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
})