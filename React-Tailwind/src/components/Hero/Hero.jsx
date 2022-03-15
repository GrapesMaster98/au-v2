import React from 'react'
import './Hero.css'

function Hero() {
  return (
      <div className="flex-container">
          <h1>Somos <span className='font-bold text-blue-800'>Aurealis</span></h1>
          <h2 className="mt-3">Diseñamos ideas, desarrollamos futuros, nuestra misión es hacer realidad tu visión</h2>
          <a href="/" className='mt-8 button rounded-md hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/50'>Contactanos</a>
      </div>
  )
}

export default Hero;