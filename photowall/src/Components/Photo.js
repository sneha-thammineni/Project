import React,{Component} from 'react'
import propTypes from 'prop-types'
import { bindActionCreators } from '../../node_modules/redux';
import {Link} from 'react-router-dom'

// Stateless functons 

function Photo(props){
    const post = props.post
    return <figure className='figure'> 
    <Link to = {`/single/${post.id}`}> <img className='photo' src= {post.imageLink} alt= {post.description}   /></Link>
    
    <figcaption > <p> {post.description}</p></figcaption>
    <div className='button-container'>

    <button onClick = {()=>{
      props.startRemovingPost(props.index, post.id)
    }}> Remove</button>
    </div>

    </figure>
}

Photo.propTypes ={
    post:propTypes.object.isRequired ,
    // onRemovePhoto: propTypes.func.isRequired
}



// classes using components

// class Photo extends Component {

//     render(){
         
//          const post = this.props.post
//          return <figure className='figure'> 
//          <img className='photo' src= {post.imageLink} alt= {post.description}   />
//          <figcaption > <p> {post.description}</p></figcaption>
//          <div className='button-container'>
//          <button className='remove-buton'> Remove</button>
//          </div>
    
//          </figure>
        
      
    
//     }
    
//     }


export default Photo
