import React, {Component} from 'react';
//import ReactDom from 'react-dom';
import Title from './Title.js';
import Single from './Single.js';

import PhotoWall from './PhotoWall.js';
import AddPhoto from './AddPhoto.js';
import {Route , Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {removePost} from '../redux/actions'

// const posts = [{
//     id: "0",
//     description: "beautiful landscape",
//     imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
//     "3919321_1443393332_n.jpg"
//     }, {
//     id: "1",
//     description: "Aliens???",
//     imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
//     "08323785_735653395_n.jpg"
//     }, {
//     id: "2",
//     description: "On a vacation!",
//     imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
//     }]


// Using state instead of prop . props cannot be used to read only immutable data. cant be used over time. State represents data which can be used over again and again. it is mutable.


class Main extends Component {
    componentDidMount(){
        this.props.startLoadingPost()
    }
    // constructor(){
        // super()
        // this.state = {
        //     // First page
        //     posts:[{
        //         id: 0,
        //         description: "beautiful landscape",
        //         imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        //         "3919321_1443393332_n.jpg"
        //         }, {
        //         id: 1,
        //         description: "Aliens???",
        //         imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
        //         "08323785_735653395_n.jpg"
        //         }, {
        //         id: 2,
        //         description: "On a vacation!",
        //         imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
        //         }],
        //         // Second Page
        //         screen : 'photos'
        // }
        // If we dont use this.removePhoto and bind it , it will show a null result and  we wont be able to access the this.setState function in the removePhoto method.
        // this.removePhoto = this.removePhoto.bind(this);
        // this.navigate = this.navigate.bind(this);

    // }

    // componentDidMount(){
    //     this.props.removePost(1)
    // }


// // Adding a new method to update the remove button in the photo component and linking the images wtith the remove button
//     removePhoto(postRemoved){
//      console.log(postRemoved.description)
//     //  using setState function to update the posts again by taking them the state and trying to filter the required post which we want to remove and making it not equal to the remaining posts
//      this.setState((state)=>({
//    posts: state.posts.filter(post => post !== postRemoved)
//      }))
//     }

    // navigate(){
    //     this.setState({
    //         screen : 'addPhoto'
    //     })
    // }

//     componentDidMount(){
//         // Gathering the data from the database
//   const data = SimulateFetchFromDatabase()
//       this.setState({
//           posts : data
//       })
  

//     }


// addPhoto(postSubmitted){
// this.setState(state=>({
//     posts: state.posts.concat([postSubmitted])
//  }))

// }
    render(){
        
        return (
        <div>
            {/* {
                this.state.screen === 'photos' && ( */}
          <Route exact path = '/' render={()=>(
                <div>
                    <h1> 
                        <Link to ='/'> Photowall</Link>
                    </h1>
                {/* Creating title instance */}
           {/* {<Title title = {'Photowall'}/>} */}
           {/* Creating a photoWall instance which takes two props : 1, contains current state of posts and the other is a prop function which helps to remove the photo */}
           
           {/* {<PhotoWall posts = {this.state.posts} onRemovePhoto = {this.removePhoto} onNavigate = {this.navigate}/>} */}
           {/* Spread operator destructures the following */}
           <PhotoWall {...this.props} /> 
           </div>
          )} />
        
            {/* } */}
            {/* {
this.state.screen === 'addPhoto' && ( */}
<Route path = '/AddPhoto' render = {({history})=>(
    <AddPhoto {...this.props} onHistory = {history}  />
     
    
)}/> 

<Route path = '/single/:id' render = {(params)=>(
<Single  {...this.props}{...params}/>
)}/>
  


          </div>
          )
        
    }
}
function mapStateToProps(state){
    return {
        posts:state
    }
}
// After everything is inserted into the DOM:
// Simulating an api req that re renders the data 
// function SimulateFetchFromDatabase (){
//     return [{
//         id: "0",
//         description: "beautiful landscape",
//         imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
//         "3919321_1443393332_n.jpg"
//         }, {
//         id: "1",
//         description: "Aliens???",
//         imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
//         "08323785_735653395_n.jpg"
//         }, {
//         id: "2",
//         description: "On a vacation!",
//         imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
//         }]


// }

export default Main;








// url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.eot?#iefix") format('embedded-opentype'), url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.woff") format('woff'), url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.ttf") format('truetype'), url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.svg#billabongregular") format('svg'); 

//url("https://image.flaticon.com/icons/svg/60/60740.svg") center no-repeat;




