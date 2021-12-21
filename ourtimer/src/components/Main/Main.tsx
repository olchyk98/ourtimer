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
      <div className={ styles.timerContainer }>
        <span className={ styles.description }>Together for:</span>
        <Timer
          startDate={ 1636231620000 } // 6 November 2021 21:47
        />
      </div>
      <Carousel
        interval={ 5e3 }
        images={ carouselImages }
      />
    </div>
  )
}
