import React, { Component } from 'react'

class userGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
  render() {
    return(
        this.state.isLoggedIn ? <div>Welcome Devina</div> : <div> Welcome Guest </div>
    )
  }
}

export default userGreeting