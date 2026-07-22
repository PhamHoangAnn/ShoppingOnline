import React, { Component } from 'react';
import MyContext from './MyContext';

class MyProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { // global state
            // variables — restore from localStorage so refresh/direct
            // navigation doesn't lose the logged-in session
            token: localStorage.getItem('admin_token') || '',
            username: localStorage.getItem('admin_username') || '',
            // functions
            setToken: this.setToken,
            setUsername: this.setUsername
        };
    }
    setToken = (value) => {
        if (value) {
            localStorage.setItem('admin_token', value);
        } else {
            localStorage.removeItem('admin_token');
        }
        this.setState({ token: value });
    }
    setUsername = (value) => {
        if (value) {
            localStorage.setItem('admin_username', value);
        } else {
            localStorage.removeItem('admin_username');
        }
        this.setState({ username: value });
    }
    render() {
        return (
            <MyContext.Provider value={this.state}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}
export default MyProvider;
