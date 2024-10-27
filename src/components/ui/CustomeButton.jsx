import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function CustomeButton({title,link}) {
  return (
    <button className="bg-cyan-600 mt-4  text-white font-semibold py-3 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out hover:bg-cyan-700">{title}<FaArrowRight className="ml-2" /></button>
  )
}

export default CustomeButton    