
// Remove button

import _posts from '../data/posts.js'
import {combineReducers} from 'redux'

// Every piece of state contains a reducer which is used to update it when the action is emitted




 function comments (state = [] , action){
     switch (action.type){
        //  if the action type is the add comment button then we will add it to our state
         case 'ADD_COMMENT': return [...state, action.comment]
        //  Otherwise simply return default state
         default : return state
     }
     console.log('comments reducer')

    return state
}
 function posts (state= _posts ,action){
 console.log('posts reducer')
     switch (action.type){
        //  updating the state but not re writing it
        // Using ES6 spread operator using slice(0) such that it starts from the index and goes to the last before we pressed the remove button
        //  After pressing the return button , it grabs everything 
         case 'REMOVE_POST':return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
         case 'ADD_POST':return [...state, action.post]
         case 'LOAD_POSTS':return action.posts
        default : return state
     }
console.log(action.index)
return state
}

const rootReducer = combineReducers({posts, comments})

export default rootReducer