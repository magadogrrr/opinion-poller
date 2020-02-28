import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
    console.log('Action Payload', action.payload);
    console.log('state', state);
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
}