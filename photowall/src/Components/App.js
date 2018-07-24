import {connect} from 'react-redux'
import Main from './Main.js'
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions'
// used to connect to the second page where we start adding photos
import {withRouter} from 'react-router'

// it will take the state in the store and map it to the props
function mapStateToProps(state){
    return {
        posts:state.posts,
        comments : state.comments
    }
}
// dispatching the action payload 
function mapDispachToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
   }
//  Here we are using the 'connect' to connect the component to which we are going to pass the store.
// connect doesnt modify the main component but it only connects the main component to the store.


const App = withRouter(connect(mapStateToProps,mapDispachToProps)(Main))
export default App


