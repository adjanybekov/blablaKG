import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar';
import MyTable from './components/MyTable';
import DropDown from './components/DropDown';



class App extends React.Component{


  state={
    data:[]
  }

  getAppStyle = ()=>{
    return{
      // background:'#357376',
      minHeight: '100%',
      padding:'20px',
      margin:'20px'
    };
  };

  readData=(data)=>{
    // console.log(data);
    this.setState({data:data});

  }
  
    render(){
      return (
      <div className='App'>
        
        <div style={this.getAppStyle()}>
        <SearchBar readData={this.readData}/>
        </div>
        <div>
          <MyTable attr={this.state.data}/>
        </div> 
  
      
      </div>
      
    )
  }
}

export default App;
