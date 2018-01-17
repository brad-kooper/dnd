import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { profile: state.profile };
};

class NewCharacter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            characterName: '',
            race: '',
            jobClass: '',
            alignmentLNC: 'Lawful',
            alignmentGNE: 'Good'
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    saveCharacter = () => {
        let profile = this.props.profile[0];
        profile.characters = [];
        profile.characters.push({
            name : this.state.characterName,
            race : this.state.race,
            jobClass : this.state.jobClass,
            alignmentLNC : this.state.alignmentLNC,
            alignmentGNE : this.state.alignmentGNE
        });
        fetch('http://vddp35p-0uk72zg:8080/profiles', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-Type': 'application/json'
            },
            body: JSON.stringify(profile)
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
                    <label>Character Name </label>
                    <input type="text" value={this.state.characterName} name='characterName' onChange={this.handleChange} />
                </div>
                <div>
                    <label>Race </label>
                    <input type="text" value={this.state.race} name='race' onChange={this.handleChange} />
                </div>
                <div>
                    <label>Class </label>
                    <input type="text" value={this.state.jobClass} name='jobClass' onChange={this.handleChange} />
                </div>
                <div>
                    <label>Alignment </label>
                    <select defaultValue={this.state.alignmentLNC} name='alignmentLNC' onChange={this.handleChange}>
                        <option value="Lawful">Lawful</option>
                        <option value="Neutral">Neutral</option>
                        <option value="Chaotic">Chaotic</option>
                    </select>
                    <select defaultValue={this.state.alignmentGNE} name='alignmentGNE' onChange={this.handleChange}>
                        <option value="Good">Good</option>
                        <option value="Neutral">Neutral</option>
                        <option value="Evil">Evil</option>
                    </select>
                </div>
                <div>
                    <button onClick={this.saveCharacter}>Save</button>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(NewCharacter)
