import React from 'react';
import { connect } from "react-redux";

import NewCharacter from './NewCharacter';
import Login from './Login';

const mapStateToProps = state => {
    return { profile: state.profile };
};

class CharacterContainer extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    componentDidMount(){
        console.log("CharacterContainer did mount");
    }

    componentWillReceiveProps(nextProps){
        console.log("CharacterContainer: componentWillReceiveProps: " + nextProps);
    }
    
    render(){
        const profile = JSON.stringify(this.props.profile, null, 2);
        return (
            <div>
                <pre>{profile}</pre>
                <NewCharacter/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(CharacterContainer)
