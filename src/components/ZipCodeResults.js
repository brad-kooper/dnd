import React from 'react';

class ZipCodeResults extends React.Component {

    componentWillReceiveProps(nextProps){
        console.log("ZipCodeResults: componentWillReceiveProps: " + nextProps.zipCode);
    }

    render(){
        console.log('ZipCodeResults: render');

        const zipCode = this.props.zipCode;
        const response = JSON.stringify(this.props.response, null, 2);

        return (
            <div className='zip-code-results'>
                <h3 className='request'>You entered: {zipCode}</h3>
                <pre className='response'>Response: {response}</pre>
                
            </div>
        )
    }
}

export default ZipCodeResults
