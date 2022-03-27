import { useEffect, useState } from 'react'
import { TextLabel } from '../TextLabel'
import { Counter } from './Counter'

export function TimerContainer ({ startTime }: TimerContainerProps): React.ReactElement {
  const [ progressDate, setProgressDate ] = useState(
    calculateProgressDate(startTime)
  )

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextProgressDate = calculateProgressDate(startTime)
      setProgressDate(nextProgressDate)
    }, 1e3)

    return () => clearInterval(intervalId)
  }, [ startTime ])

  return (
    <div className="flex space-y-10 flex-col justify-center">
      <TextLabel>Together for:</TextLabel>
      <div className="flex items-center space-x-10">
        <Counter
          label="Months"
          value={ progressDate.getMonth() }
        />
        <Counter
          label="Days"
          value={ progressDate.getDate() }
        />
        <Counter
          label="Hours"
          value={ progressDate.getHours() }
        />
        <Counter
          label="Minutes"
          value={ progressDate.getMinutes() }
        />
        <Counter
          label="Seconds"
          value={ progressDate.getSeconds() }
        />
      </div>
    </div>
  )
}

const calculateProgressDate = (startTime: number): Date => (
  new Date(Date.now() - startTime)
)

interface TimerContainerProps {
  startTime: number
}
