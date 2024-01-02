import React from 'react'
import Typewriter from 'typewriter-effect';


const BannerTyper = ({text}) => {
  return (
    <Typewriter
      options={{
        strings: ['Find your dream job or let companies find you'],
        autoStart: true,
        loop: true,
      }}
    />
  )
}

export default BannerTyper