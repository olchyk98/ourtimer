import React from 'react'
import { useStyles } from './NumberBlock.styles'

export interface NumberBlockProps {
  label: string
  value: string | number
}

export const NumberBlock = (props: NumberBlockProps): JSX.Element => {
  const {
    value,
    label,
  } = props
  const styles = useStyles(props)

  return (
    <div className={ styles.container }>
      <h4 className={ styles.value }>{ value }</h4>
      <span className={ styles.label }>{ label }</span>
    </div>
  )
}
