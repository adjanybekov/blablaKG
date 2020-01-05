import React from 'react'

import Dropdown from 'react-dropdown'

class DropDown extends React.Component{

    state={
        value:'',
        data: [{id:1,name:'Bishkek'},{id:2,name:'Osh'},{id:3,name:'Karakol'}],
        dataNames: ['Bishkek','Osh','Karakol']

    }

    handleChange = (event) =>{
        console.log(event);
        this.setState({value:event.value});
        this.props.onDropDown('from',event.value);        
    }


        render(){
            
const options = this.state.dataNames
            return(
            <div>
                <Dropdown  
                // title="Select location"
                options={options}
                onChange={this.handleChange}  value={this.state.value} placeholder={this.props.value}
                // toggleItem={this.toggleSelected}
                >
                {/* <Dropdown.Toggle variant="success" id="dropdown-basic" value = {this.state.value} onChange={this.handleChange}>
                    
                </Dropdown.Toggle>

                <Dropdown.Menu  value = {this.state.value} onChange={this.handleChange}>
                  {options}
                </Dropdown.Menu> */}
                </Dropdown>
            </div>)
        }
}

export default DropDown;