import { createContext } from 'react'
import { ToggleStore } from './createToggleStore'

// We'll provide the entire store object through context
const ToggleStateContext = createContext<ToggleStore | null>(null)

export default ToggleStateContext
