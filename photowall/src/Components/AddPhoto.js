import React,{Component} from  'react'
import {Link} from 'react-router-dom';

class AddPhoto extends Component {
    constructor(){
        super()
        this.handleSubmit= this.handleSubmit.bind(this)
    }


    handleSubmit(event){
        // Once you click the post button the page gets reloaded. it order to prevent it, use preventDefault method.
        event.preventDefault();
        // Get the values of the event's data that you have submitted
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const post ={
            id : Number (new Date()),
            description : description,
            imageLink : imageLink
        }
        if(imageLink && description) {
//   Giving the action a payload
          this.props.startAddingPost(post) 
          this.props.onHistory.push('/')
        }

    }
render(){
    return (
        <div>
            <div className='form'>
   <h1> <Link to = '/' >Photowall</Link> </h1>
     {/* Once this oneSubmit button is pressed, handleSubmit method gets called */}
    <form  onSubmit={this.handleSubmit} className='form'> 
 <input type='text' placeholder='Link'name='link'/>
 <input type='text' placeholder='Description' name='description'/>
 <button> Post </button>
    </form>
    </div>
        </div>
   

    )
}


}

export default AddPhoto