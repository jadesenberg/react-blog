import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function ( state = {}, action ) {

    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id'); // make object {4:posts data} not [ post1, post2]
        default:
            return state;
    }
}