import { useContext, useEffect, useState } from 'react'
import { ScreenContext } from '../../contexts'
import { TextLabel } from '../TextLabel'
import { Counter } from './Counter'

export function TimerContainer (): React.ReactElement {
  const { startTime, key: dataSpecKey } = useContext(ScreenContext)
  const [ progressDate, setProgressDate ] = useState(
    calculateProgressDate(startTime),
  )

  function handleDateTick () {
    const nextProgressDate = calculateProgressDate(startTime)
    setProgressDate(nextProgressDate)
  }

  useEffect(() => {
    handleDateTick()
    const intervalId = setInterval(() => {
      handleDateTick()
    }, 1e3)

    return () => clearInterval(intervalId)
  }, [ startTime ])

  return (
    <div className="flex gap-y-5 flex-col justify-center">
      <TextLabel>Together for:</TextLabel>
      <div className="flex items-center gap-x-10 gap-y-5 flex-wrap justify-center">
        <Counter
          label="Months"
          value={ progressDate.getMonth() }
          animationKey={ createCounterKey('month', dataSpecKey) }
        />
        <Counter
          label="Days"
          value={ progressDate.getDate() }
          animationKey={ createCounterKey('day', dataSpecKey) }
        />
        <Counter
          label="Hours"
          value={ progressDate.getHours() }
          animationKey={ createCounterKey('hour', dataSpecKey) }
        />
        <Counter
          label="Minutes"
          value={ progressDate.getMinutes() }
          animationKey={ createCounterKey('minute', dataSpecKey) }
        />
        <Counter
          label="Seconds"
          value={ progressDate.getSeconds() }
          animationKey={ createCounterKey('second', dataSpecKey) }
        />
      </div>
    </div>
  )
}

const calculateProgressDate = (startTime: number): Date => (
  new Date(Date.now() - startTime)
)

const createCounterKey = (key: string, dataSpecKey: string) => (
  `${dataSpecKey}_${key}`
)
