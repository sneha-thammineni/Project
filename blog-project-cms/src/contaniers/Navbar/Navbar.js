import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import './Navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);

    // Binding function to `this`
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentWillMount() {
    console.log('Navbar componentWillMount');
  }

  componentDidMount() {
    console.log('Navbar componentDidMount')
  }

  componentWillReceiveProps(NextProps) {
    console.log('Navbar componentWillReceiveProps', NextProps)
  }

  componentWillUnmount() {
    console.log('Navbar componentWillUnmount');
  }

  // Handle logout process
  handleLogout() {
    var {dispatch} = this.props
    dispatch(authorizeActions.dbLogout())
  }

  render() {
    const isAuth = this.props.isAuth
    const currentUser = this.props.currentUser
    const linkTo = isAuth ? "/" : "/login"
    const linkText = isAuth ? `${currentUser.displayName}` : "Login"
    return (
      <header>
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to={ "/" } className="navbar-brand">
                Blog
              </Link>
            </div>
            <ul className="nav navbar-nav pull-right">
              <li>
                <Link to={ linkTo }>
                  { linkText }
                </Link>
              </li>
              <li onClick={this.handleItemClick}>
                <Link to={this.handleLogout}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

Navbar.propTypes = {
};

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth,
    currentUser: state.auth.currentUser
  };
}

export default connect(mapStateToProps)(Navbar);
