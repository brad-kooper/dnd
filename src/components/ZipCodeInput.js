import React from 'react';

class ZipCodeInput extends React.Component {

    componentDidMount(){
        console.log('ZipCodeInput: componentDidMount')
    
    }

    render(){
        return (
            <div>
                <label>Enter zip code: </label>
                <input type="text" onBlur={this.props.onBlur} />
            </div>
        )
    }
}

export default ZipCodeInput
