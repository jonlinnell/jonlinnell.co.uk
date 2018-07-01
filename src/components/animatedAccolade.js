import React from 'react'
import { animated } from 'react-spring'

const AnimatedAccolade = (props) => (
  <animated.span
    style={props.style}
  >
    {props.string}
  </animated.span>
)

export default AnimatedAccolade
