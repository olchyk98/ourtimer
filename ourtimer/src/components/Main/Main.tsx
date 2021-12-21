import React from 'react'
import { useStyles } from './Main.styles'
import LogoURL from '../../static/images/logo.png'
import { Timer, Carousel } from '../'
import { carouselImages } from './carouselImages'

export const Main = (): JSX.Element => {
  const styles = useStyles()

  return (
    <div className={ styles.container }>
      <img
        className={ styles.logo }
        alt="victoria and oles"
        src={ LogoURL }
      />
      <Timer
        startDate={ 1636153200000 } // 6 November 2021
      />
      <Carousel
        interval={ 5e3 }
        images={ carouselImages }
      />
    </div>
  )
}
