import React, { Component } from 'react';
import MyComponent from './MyComponent';
import axios from 'axios';
import {Button,Row,Input} from 'react-materialize'

class SubmitComponent extends Component {

  //   constructor(){
     
  //     super();
  //     this.state = {
  //     items: [],
  //     sysId: "571783655c14710e248216ba",
  //     isLoaded: true
  //   }
  //   //  this.submit={submit: false};
  //   // this.handleSubmit = this.handleSubmit.bind(this);
  //   // this.getData = this.getData.bind(this);
  // }

handleSubmit()
  {
    this.getData();

  }
componentDidMount(){

  this.getData();

}

handleChange(e){
  this.setState({
      sysId: e.target.value
    });
  }

  getData(){
      this.setState({
          isLoaded: false,
        });
      axios.get("http://localhost:4000/api/data/"+this.state.sysId)
      .then(
        (result) => {

          this.setState({
          
            isLoaded: true,
          
            items: result.data.data


          
          });
        },
       
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

render() {
  
  return (
      
      <div>  
      <Row>
          <Input s={6} 
            label="Please enter System ID to continue:"
            defaultValue={this.props.sysId}
            onChange={this.handleChange.bind(this)}
      
          />
        </Row>
        <Button onClick={this.handleSubmit}>Submit</Button>
        <MyComponent isLoaded = {this.props.isLoaded} items = {this.props.items} onSubmit= {this.handleSubmit}/>
    </div> 
  );
   
  }

}
export default SubmitComponent;