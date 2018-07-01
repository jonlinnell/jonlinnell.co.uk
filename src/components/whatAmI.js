import React, { PureComponent } from 'react'
import { Transition, animated } from 'react-spring'

import AnimatedAccolade from './animatedAccolade.js'

const accolades = [
  style => <AnimatedAccolade style={style} string="surprisingly articulate primate." />,
  style => <AnimatedAccolade style={style} string="reluctant runner." />,
  style => <AnimatedAccolade style={style} string="devourer of curries." />,
  style => <AnimatedAccolade style={style} string="proud owner of three different cheese graters." />,
  style => <AnimatedAccolade style={style} string="cheese connoiseur." />,
  style => <AnimatedAccolade style={style} string="aspiring francophone." />,
  style => <AnimatedAccolade style={style} string="definitely NaN." />,
  style => <AnimatedAccolade style={style} string="essentially just a robot made of meat." />,
]

class whatAmI extends PureComponent {
  constructor() {
    super()

    this.state = {
      index: 0
    }
  }

  randomiseString() {
    this.setState({
      index: Math.floor(Math.random() * Math.floor(accolades.length))
    })
  }

  componentDidMount() {
    this.randomiseString()

    setInterval(() => this.randomiseString(), 5000)
  }

  render() {
    return (
      // NOT YET RESPONSIVE. Looks bad on small devices.
      <p className="accolade-animation-container">
        I'm a web developer, photographer, and&nbsp;
        <Transition
            native
            from={{ opacity: 0, transform: 'translate3d(0, -100%, 0)' }}
            enter={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
            leave={{ opacity: 0, transform: 'translate3d(0, 100%, 0)' }}
        >
          {accolades[this.state.index]}
        </Transition>
      </p>
    )
  }

}

export default whatAmI