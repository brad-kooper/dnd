/**
 * ZipCode container
 * containers know about data, they have the logic, they format the data for the presentation view components.
 * Often HOC are used to create containers.
 * 
 */

import React from 'react';

import Login from './Login';
import CharacterContainer from './CharacterContainer';
import { Switch, Route } from 'react-router-dom'

class ProfileContainer extends React.Component {

    constructor(props){
        super(props)

        this.state = {

        }
        this.setProfile = this.setProfile.bind(this);
    }

    setProfile(profile) {
        this.setState({profile: profile});
    };
    
    render(){
        return (
            <div>
                {/* <h2>Login</h2>
                <Login returnProfile={this.setProfile}/>
                <h2>Sign up</h2>
                <NewProfile/>
                { this.state.profile && this.state.profile.characters &&
                    <CharacterContainer profile={this.state.profile}/>
                } */}
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route path='/character' component={CharacterContainer}/>
                </Switch>
            </div>
        )
    }
}

export default ProfileContainer
