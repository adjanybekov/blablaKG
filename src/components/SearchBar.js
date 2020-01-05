import React,{Component} from 'react';
import DropDown from './DropDown';
import DropDownTo from './DropDownTo';

class SearchBar extends Component{

    state = {
        data:[
            {name:'Azatbek', from:'Bishkek',to:'Osh',price:1000,tel:'0550033225',total:4,occupied:2},
            {name:'Azizbek',from:'Osh',to:'Bishkek',price:1200,tel:'0550033225',total:4,occupied:2},
            {name:'Azimbek', from:'Bishkek',to:'Karakol',price:500,tel:'0550033225',total:4,occupied:2},
            {name:'Alymbek', from:'Karakol',to:'Bishkek',price:500,tel:'0550033225',total:4,occupied:2}
        ],
        from:'',
        to:''
    }

    getDropDownStyle = ()=>{
        return{
            textDecoration:'none',
            padding:'20px',
            margin: 'auto',
            width: '50%'
        };
    }

    getSearchBarStyle = ()=>{
        return{
            textDecoration:'none',
            background:"#daece7ad",
            padding:'20px'           
        };
    }
    
    onDropDown = (var1,var2)=>{        
        if(var1==='from'){
            this.setState({from:var2});
        }else{
            this.setState({to:var2});
        }
        console.log(var1,var2);
    }  

    foo=()=>{
        console.log('',this.state.from,this.state.to);
        //find data and send it to the list
        var list = [];
        for(var i=0; i<this.state.data.length; i++){
            if(this.state.data[i].from===this.state.from && this.state.data[i].to===this.state.to){
                list.push(this.state.data[i]);
            }
        }
        // console.log(list);
        this.props.readData(list);
        // this.props.onFormSubmit();
    }

    render(){
        return(
        <div >
            <div className='row' style={this.getSearchBarStyle()}>    
                {/* <div className='col-md-6' > 
                    <div style={this.getDropDownStyle()}>
                    <DropDown />    
                    </div>
                  
                </div>

                <div className='col-md-6'> 
                    <div style={this.getDropDownStyle()}>
                        <DropDown />    
                    </div>
                </div> */}

                    <div className="input-group mb-3 col-md-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Source</span>
                        </div>
                        <DropDown onDropDown={this.onDropDown} value='From'/>
                        </div>
                        <div className="input-group mb-3 col-md-7">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Destinations</span>
                        </div>
                        <DropDownTo onDropDown={this.onDropDown} value='To'/>
                        </div>
                        <div className="col-md-2">
                            <button className='btn btn-primary' onClick={this.foo} >Search ride</button>
                        </div>
                
            </div>

        </div>)
    }
}

export default SearchBar;