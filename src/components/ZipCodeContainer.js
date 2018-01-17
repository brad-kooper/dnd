/**
 * ZipCode container
 * containers know about data, they have the logic, they format the data for the presentation view components.
 * Often HOC are used to create containers.
 * 
 */

import React from 'react';

import ZipCodeInput from './ZipCodeInput'
import ZipCodeResults from './ZipCodeResults'

class ZipCodeContainer extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            zipCode : '',
            country : '',
            response : ''
        }

        this.handleOnBlur = this.handleOnBlur.bind(this);
    }

    componentDidMount(){
        this.lookupZipCode(this.state.zipCode);
         
    }

    lookupZipCode(zipCode){
        if(zipCode !== ''){
            fetch('http://vddp35p-0uk72zg:8080/greeting?name=' + zipCode)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.setState({response: response});
            });
        }   
    }

    //TODO: let the child component handle getting the value and using lookupZipCode
    handleOnBlur(event){
        this.lookupZipCode(event.target.value);
        
    }
   

    render(){
        return (
            <div>
                <ZipCodeInput {...this.state} onBlur={this.handleOnBlur}/>
                <ZipCodeResults {...this.state} />
            </div>
        )
    }
}

export default ZipCodeContainer
