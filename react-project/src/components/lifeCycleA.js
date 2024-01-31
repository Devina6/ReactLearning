import React, { Component } from 'react'
import LifeCycleB from './lifeCycleB'

class lifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Devina'
      }
      console.log('lifecycleA constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('lifeCycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
     console.log('lifecycleA ComponentDidMount')   
    }
  render() {
    console.log('lifeCyleA render')
    return (
      <div>
        <div>LifeCycleA</div>
        <LifeCycleB />
      </div>
    )
  }
}

export default lifeCycleA