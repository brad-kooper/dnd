import React from 'react';

class NewProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    saveProfile = () => {
        fetch('http://vddp35p-0uk72zg:8080/profiles', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.username,
                password: this.state.password,
            })
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            this.setState({profile: response});
        });
        console.log(this);
    }

    render(){
        return (
            <div>
                <div>
                    <label>First Name </label>
                    <input type="text" value={this.state.firstName} name='firstName' onChange={this.handleChange}/>
                </div>
                <div>
                    <label>Last Name </label>
                    <input type="text" value={this.state.lastName} name='lastName' onChange={this.handleChange} />
                </div>
                <div>
                    <label>Username </label>
                    <input type="text" value={this.state.username} name='username' onChange={this.handleChange} />
                </div>
                <div>
                    <label>Password </label>
                    <input type="text" value={this.state.password} name='password' onChange={this.handleChange} />
                </div>
                <div>
                    <button onClick={this.saveProfile}>Save</button>
                </div>
            </div>
        )
    }
}

export default NewProfile
