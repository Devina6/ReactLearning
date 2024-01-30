import React, { Component } from 'react'

class userGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
  render() {

    let message 
    if(this.state.isLoggedIn){
        message = <div>Welcome Devina</div>
    }else{
        message = <div> Welcome Guest </div>
    }
    return <div>{message}</div>
  }
}

export default userGreeting