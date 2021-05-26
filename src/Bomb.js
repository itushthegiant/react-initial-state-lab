
import React, { Component } from 'react'

export default class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }



    render() {
        return (
            <div>
             {secondsLeft} seconds left before I go boom!   
            </div>
        )
    }
}
