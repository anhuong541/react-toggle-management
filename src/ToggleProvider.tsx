'use client'

import React, { useState } from 'react'
import ToggleStateContext from './ToggleContext'
import { createToggleStore } from './createToggleStore'

interface ToggleStateContextProviderProps {
  children: React.ReactNode
  initialState?: Set<string>
}

export default function ToggleGlobalProvider({
  children,
  initialState
}: ToggleStateContextProviderProps) {
  // Created once per Provider instance; later changes to initialState are ignored,
  // matching useState's lazy-initializer semantics.
  const [store] = useState(() => createToggleStore(initialState))

  return (
    <ToggleStateContext.Provider value={store}>
      {children}
    </ToggleStateContext.Provider>
  )
}
