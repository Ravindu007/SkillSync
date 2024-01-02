import React from 'react'
import BannerTyper from './BannerTyper'

const Banner = () => {
  return (
    <div className='py-2'>
      <h1 className='text-4xl md:text-6xl bg-gradient-to-r from-primary to-black bg-clip-text text-transparent font-bold'>
        <BannerTyper/>
      </h1>
    </div>
  )
}

export default Banner