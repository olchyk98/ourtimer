import React, { useEffect, useState } from 'react'
import { useStyles } from './Timer.styles'
import { NumberBlock } from '..'

interface TimerProps {
  startDate: number
}

const calculateDiffDate = (startDate: number) => (
  new Date(Date.now() - startDate)
)

export const Timer = (props: TimerProps): JSX.Element => {
  const { startDate } = props
  const styles = useStyles()
  const [ currentDiff, setCurrentDiff ] = useState(calculateDiffDate(startDate))

  useEffect(() => {
    const dateInterval = setInterval(
      () => setCurrentDiff(calculateDiffDate(startDate)),
      1e3,
    )

    return () => clearInterval(dateInterval)
  }, [])

  return (
    <div className={ styles.container }>
      <NumberBlock
        value={ currentDiff.getMonth() }
        label="Months"
      />
      <NumberBlock
        value={ currentDiff.getDate() }
        label="Days"
      />
      <NumberBlock
        value={ currentDiff.getHours() }
        label="Hours"
      />
      <NumberBlock
        value={ currentDiff.getMinutes() }
        label="Minutes"
      />
      <NumberBlock
        value={ currentDiff.getSeconds() }
        label="Seconds"
      />
    </div>
  )
}
