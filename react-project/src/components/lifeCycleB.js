import React, { Component } from 'react'

class lifyCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Devina'
      }
      console.log('lifyCycleB constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('lifyCycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
     console.log('lifyCycleB ComponentDidMount')   
    }
    shouldComponentUpdate(){
        console.log('lifeCycleB shouldcomponentUpdate')
        return true
      }
      getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('lifeCycleB getSnapshotBeforeUpdate')
        return null
      }
      componentDidUpdate(){
        console.log('lifeCycleB componentDidUpdate')
      }
  render() {
    console.log('lifeCyleB render')
    return (
      <div>
        LifyCycleB
      </div>
    )
  }
}

export default lifyCycleB