import React,{Component} from 'react'
import Photo from './Photo.js'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'

function PhotoWall (props){
    return <div>
        {/* Using Component setup */}
        {/* <a className ='addIcon'onClick = {props.onNavigate} href='#AddPhoto'></a> */}
         {/* Using React router's Link Component to navigate to the other page */}
         <Link className ='addIcon' to='/AddPhoto'></Link>
    {/* <button onClick={props.onNavigate} className='addIcon' > </button> */}
    <div className='photoGrid'>
    {/* for every array of posts that we map we create a photo instance which contains individual posts as props and each prop contains each figure which further contains the descriptions and the link for the image */}
             {props.posts
             .sort(function(x,y){
              return y.id - x.id
             })
                .map((post,index) =><Photo key = {index} post = {post} {...props} index = {index}/>)}
    </div>
    </div>
}

PhotoWall.propTypes = {
    posts:propTypes.array.isRequired ,
    // onRemovePhoto: propTypes.func.isRequired
}







export default PhotoWall
