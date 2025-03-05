import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function TypeWriter() {
  return (
    <TypeAnimation
    sequence={[
        'I am a Software Engineer',
        1000,
        'I am a Boilermaker',
        1000,
        'I build scalable applications',
        1000,
        'I turn ideas into reality',
        1000,
        'I solve problems with code',
        1000
    ]}
    wrapper="span"
    speed={40}
    repeat={Infinity}
    />
  )
}

export default TypeWriter