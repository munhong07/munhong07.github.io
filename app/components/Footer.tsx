import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

export const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center border-t">
      <div className="md:pl-28 p-5">
        <h1 className="font-semibold">© 2024 Mun Hong </h1>
      </div>
      <div className="flex flex-col md:flex-row md:pr-28">
        <div className="p-5 flex">
          <a href="#" className="flex gap-2 p-1 justify-center items-center rounded-lg hover:scale-110 hover:underline hover:underline-offset-8 duration-100">
            <FontAwesomeIcon icon={faGithub} className="text-3xl lg:text-3xl" />
            <p className="font-bold"></p>
          </a>
        </div>
        <div className="p-5">
          <a href="mailto:munhong.4400@outlook.com" className="flex gap-2 p-1 justify-center items-center rounded-lg hover:scale-110 hover:underline hover:underline-offset-8 duration-100">
            <FontAwesomeIcon icon={faEnvelope} className="text-3xl lg:text-3xl" />
            <p className="font-bold"></p>
          </a>
        </div>
        <div className="p-5">
          <a href="https://wa.me/0164513767" className="flex gap-2 p-1 justify-center items-center rounded-lg hover:scale-110 hover:underline hover:underline-offset-8 duration-100">
            <FontAwesomeIcon icon={faWhatsapp} className="text-3xl lg:text-3xl text-black" />
            <p className="font-bold"></p>
          </a>
        </div>
      </div>
    </div>
  )
}
