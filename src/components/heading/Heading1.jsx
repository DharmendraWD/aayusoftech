import React from 'react'

const Heading1 = ({text}) => {
  return (
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  text-center font-extrabold leading-tight mb-6 max-w-[1000px]">
                      {text}
                    </h1>
  )
}

export default Heading1