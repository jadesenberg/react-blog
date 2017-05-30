import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function ( state = {}, action ) {

    switch (action.type) {
        case DELETE_POST:
            return _.omit(state,action.payload); //remove deleted post on state
        case FETCH_POST:
            //const post = action.payload.data;
            //const newState = { ...state };
            //newState[post.id] = post;
            //return newState; {id: post}
            return { ...state, [action.payload.data.id]: action.payload.data } // pass action data to ...state with {id:post} format
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id'); // make object {4:posts_data} not [ post1, post2]
        default:
            return state;
    }
}