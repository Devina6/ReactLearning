import React, { Component } from 'react'

class classCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementCount = () => {
        this.setState(prevState => {
            return{count:prevState.count+1}
        })// this is the correct way

        /*this.setState({
            count:this.state.count+1
        })*/
    }
  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Class Count {this.state.count}</button>
      </div>
    )
  }
}

export default classCounter