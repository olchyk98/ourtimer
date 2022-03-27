import { memo } from 'react'
import { TextLabel } from '../TextLabel'

export const Counter = memo(
  ({ value, label }: CounterProps) => (
    <div className="space-y-5 flex-col flex items-center">
      <span className="text-white text-6xl">{enforceTwoDigits(value)}</span>
      <TextLabel>{label}</TextLabel>
    </div>
  )
)

const enforceTwoDigits = (value: number): string => (
  value
    .toString()
    .padStart(2, '0')
)

interface CounterProps {
  value: number
  label: string
}