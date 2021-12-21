import React from 'react'
import cx from 'classnames'
import { map, addIndex, flip } from 'ramda'
import { useEffect, useState } from 'react'
import { useStyles } from './Carousel.styles'

interface CarouselProps {
  images: string[]
  interval: number
}

export const Carousel = (props: CarouselProps): JSX.Element => {
  const { images, interval } = props
  const styles = useStyles()
  const [ activeIndex, setActiveIndex ] = useState(0)

  const mapImages = flip(addIndex<string>(map))(images)

  const scrollImages = () => {
    setActiveIndex((index) => (
      (index >= images.length - 1)
        ? 0 : index + 1
    ))
  }

  useEffect(() => {
    const scrollInterval = setInterval(scrollImages, interval)
    return () => clearInterval(scrollInterval)
  }, [ interval ])

  return (
    <div className={ styles.container }>
      <div className={ styles.display }>
        {
          mapImages((src, index) => (
            <img
              key={ index }
              src={ src }
              alt="we"
              className={ cx(
                styles.image,
                { [styles.activeImage]: index === activeIndex },
              ) }
            />
          ))
        }
      </div>
      <div className={ styles.navigation }>
        {
          mapImages((_, index) => (
            <div
              key={ index }
              onClick={ () => setActiveIndex(index) }
              className={ styles.navigationStepContainer }
            >
              <div
                className={ cx(
                  styles.navigationStep,
                  { [styles.activeNavigationStep]: index === activeIndex },
                ) }
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}
