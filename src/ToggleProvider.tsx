'use client'

import React, { useMemo } from 'react'
import ToggleStateContext from './ToggleContext'
import { createToggleStore } from './createToggleStore'

interface ToggleStateContextProviderProps {
  children: React.ReactNode
  initialState?: Record<string, boolean>
}

// Create a default store instance (can be overridden)
const defaultToggleStore = createToggleStore()

export default function ToggleGlobalProvider({
  children,
  initialState
}: ToggleStateContextProviderProps) {
  // Create or use a store instance
  const store = useMemo(() => {
    return initialState ? createToggleStore(initialState) : defaultToggleStore
  }, [initialState])

  return (
    <ToggleStateContext.Provider value={store}>
      {children}
    </ToggleStateContext.Provider>
  )
}
