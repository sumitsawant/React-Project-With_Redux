import React, { Component } from 'react'
import axios from 'axios'

class GetData extends Component {
    constructor () {
      super()
      this.state = {
      username: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
      axios.get('http://localhost:4000/api/data/571783655c14710e248216ba')
      .then(response => this.setState({username: response.data.name}))
  }

  render () {
    
    return (
        <div >
        <button className='button' onClick={this.handleClick}>Click Me</button>
        <p>{this.state.username}</p>
        </div>
    )
  }
}
export default GetData;