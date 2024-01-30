import React, { Component } from 'react'
import ChildComponent from './childComponent'

class parentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'
      }
      this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childName){ //define the method
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

  render() {
    return (
        // pass the method as a prop 
      <div>
        <ChildComponent greetHandler={this.greetParent}/> 
      </div>
    )
  }
}

export default parentComponent