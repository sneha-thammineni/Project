// we will update the database first and then dispatch the action that renders the UI.
import {database} from '../database/config'


export function startAddingPost (post){
    return (dispatch)=>{
        //  Declaring the property id as key. it is not es 6 notation
    return database.ref('posts').update({[post.id]:post}).then(()=>{
       dispatch(addPost(post))

    }).catch((error)=>{
        console.log(error)
    })
    }
}
//   Fetching the data from the database
export function startLoadingPost(){
    return (dispatch) =>{
        return database.ref('posts').once('value').then((snapshot)=>{
            let posts =[]
            snapshot.forEach((childSnapshot)=>{
                posts.push(childSnapshot.val())
            })
            dispatch(loadPosts(posts))
        })
    }
}

export function startRemovingPost(index,id){
   return (dispatch)=>{
     return database.ref(`posts/${id}`).remove().then(()=>{
       dispatch(removePost(index))
     })
   }

}



//function is the action creator and the javascript object which is returned is the action.

export function removePost(index){
return {
    type: 'REMOVE_POST',
    index
}

}

export function addPost(post){
    return {
        type: 'ADD_POST',
        post
    }
    
    }


    export function addComment(comment){
        return{
            type: 'ADD_COMMENT' ,
            comment
        }
    }


    export function loadPosts(posts){
        // returns action
  return {
     type : 'LOAD_POSTS',
     posts
  }
    }