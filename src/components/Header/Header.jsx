import React from 'react'
import './Header.scss'
import {images} from '../../constants'

const Header = () => {
  return (
    <div>
      <img src={images.bg_header_desktop} alt="header"/>
    </div>
  )
}

export default Header