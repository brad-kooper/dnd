import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { updateProfile } from '../js/actions';
import NewProfile from './NewProfile';

const mapDispatchToProps = dispatch => {
    return {
        updateProfile: profile => dispatch(updateProfile(profile))
    };
};

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            profile: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    getProfile = () => {
        fetch('http://vddp35p-0uk72zg:8080/profiles/' + this.state.username.toLowerCase() + '?password=' + this.state.password, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            this.setState({profile: response});
            // this.props.returnProfile(this.state.profile);
            this.props.updateProfile(this.state.profile);
            if(this.state.profile.profileMessages.length === 0) {
                this.props.history.push('/character');
            }
        });
    }

    render(){
        return (
            <div>
                <h2>Login</h2>
                <div>
                    <label>Username </label>
                    <input type="text" value={this.state.username} name='username' onChange={this.handleChange} />
                </div>
                <div>
                    <label>Password </label>
                    <input type="text" value={this.state.password} name='password' onChange={this.handleChange} />
                </div>
                <div>
                    <button onClick={this.getProfile}>Login</button>
                </div>
                { this.state && this.state.profile &&
                    <div>{this.state.profile.profileMessages[0]}</div>
                }
                <br/>
                <h2>Sign up</h2>
                <NewProfile/>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Login)