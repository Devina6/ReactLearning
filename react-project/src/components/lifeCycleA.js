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
    shouldComponentUpdate(){
      console.log('lifeCycleA shouldcomponentUpdate')
      return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('lifeCycleA getSnapshotBeforeUpdate')
      return null
    }
    componentDidUpdate(){
      console.log('lifeCycleA componentDidUpdate')
    }
    changeState = () => {
      this.setState({
        name:'ABCD'
      })
    }
  render() {
    console.log('lifeCyleA render')
    return (
      <div>
        <div>LifeCycleA</div>
        <button onClick={this.changeState}>Change state</button>
        <LifeCycleB />
      </div>
    )
  }
}

export default lifeCycleA