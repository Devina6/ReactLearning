import React, { Component } from 'react'

class eventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'hello'
      }
      {/*this.clickHandler = this.clickHandler.bind(this) */}
    }

    /*clickHandler(){
        this.setState({
            message:'Goodbye!'
        })
    }*/

    clickHandler = ()=> {
        this.setState({
            message:'GoodBye!'
        })
    }
  render() {
    return (
        <div>
            <div>{this.state.message}</div>
            {/*<button onClick={this.clickHandler.bind(this)}>Bind</button> ->binding in render,  creates a new event handler for each render too much chaos, performance impilcations
            <button onClick={() => this.clickHandler()}>Bind</button> -> arrow function in render, calling the event, efficency problem
            <button onClick={this.clickHandler}>Bind</button> -> binding through constructor */}
            <button onClick={this.clickHandler}>Bind</button> {/* class property as arrow functions -> use either 3 or 4*/}
        </div>
    )
  }
}

export default eventBind