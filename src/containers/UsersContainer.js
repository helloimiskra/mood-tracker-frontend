import React, { Component } from 'react';
//import Users from '../components/users/Users'
import { fetchUsers } from '../actions/fetchUsers'
import {connect} from 'react-redux'
import {addUser} from '../actions/addUser'

class UsersContainer extends Component {

    componentDidMount(){
        this.props.fetchUsers()

    };

    render() {
        return (
            <div>
                Users Container
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(`current state: ${state.users}`)
   return {
      users: state.users,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchUsers: () => dispatch(fetchUsers()),
      addUser: user => dispatch(addUser(user))
    }
  }
//<Users users = {this.props.users}/>
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);