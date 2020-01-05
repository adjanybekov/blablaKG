import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

class MyTable extends Component{
    
    state={
        arr:[['1','name1','last','user','3/4'],['2','name2','last','user','2/10']]
    }
    foo=()=>{
        console.log(123);
        this.setState({arr:this.props.attr});
    }
    render(){
        // this.foo();
        return(
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Driver Name</th>
                        <th>Price</th>
                        <th>Phone</th>
                        <th>Available sits</th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log(this.props.attr)}
                        {this.props.attr.map((element,i) => {
                           return( 
                            <tr>
                           <td>{i+1}</td>
                            <td>{element.name}</td>
                            <td>{element.price}</td>
                           <td>{element.tel}</td>
                           <td>{element.total-element.occupied}</td>
                           </tr>);                     
                        })}                        
                    </tbody>
                    </Table>
            </div>
        )
    }
}

export default MyTable;