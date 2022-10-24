import React from 'react'
import { Slide } from "pure-react-carousel"
const SlideItem = ({index,img,title,desc}) => {
  return (
    <>
       <Slide index={index}>
             <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                <img src={img} alt={title} className="object-cover object-center w-full" />
                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">{title}</h2>
                            <div className="flex h-full items-end pb-6">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">{desc}</h3>
                    </div>
                     </div>
             </div>
        </Slide>
    </>
  )
}

export default SlideItem