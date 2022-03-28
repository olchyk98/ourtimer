import { createContext } from 'react'
import { DataSpec } from '../dataSpecs'

export const ScreenContext = createContext<DataSpec>({} as DataSpec)
