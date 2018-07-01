import React, { PureComponent } from 'react'

class whatAmI extends PureComponent {
  constructor() {
    super()

    console.log(React.version)

    this.state = {
      whatAmI: 'slow internet connection',
      cancelRefresh: null
    }
  }

  randomiseString() {
    const things = [
      'surprisingly articulate primate',
      'reluctant runner',
      'devourer of curries',
      'proud owner of three different cheese graters',
      'cheese connoiseur',
      'aspiring francophone',
      'NaN - I am a human being, thank you very much',
      'prototype meat robot',
    ]

    const entry = Math.floor(Math.random() * Math.floor(things.length))

    this.setState({
      whatAmI: things[entry]
    })

  }

  componentDidMount() {
    this.randomiseString()

    this.setState({
      cancelRefresh: setInterval(() => this.randomiseString(), 10000)
    })
  }

  componentWillUnmount() {
    this.state.cancelRefresh()
  }

  render() {
    return (
      <p>I'm a web developer, photographer, and {`${this.state.whatAmI}`}.</p>
    )
  }

}

export default whatAmI