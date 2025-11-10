import React from 'react'

const BorderedHeading = ({text}) => {
  return (
    <div className='inline-flex z-10 items-center justify-center bg-[rgba(64, 64, 64, 0.18)] border border-[rgba(64,64,64,0.44)] px-4 py-2 rounded-[10px] mb-8'>
        <h1 className='text-gray-300 z-10 text-xs  sm:text-sm font-medium whitespace-nowrap'>{text}</h1>

    </div>
  )
}

export default BorderedHeading