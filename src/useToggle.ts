'use client'

import { useContext, useCallback, useSyncExternalStore } from 'react'
import ToggleStateContext from './ToggleContext'

export function useToggle(key: string) {
  const store = useContext(ToggleStateContext)

  if (!store) {
    throw new Error(
      'useToggle must be used within a ToggleStateContextProvider'
    )
  }

  const isOpen = useSyncExternalStore(
    store.subscribe,
    () => store.getState()[key] ?? false,
    () => false // <-- getServerSnapshot fallback
  )

  const open = useCallback(() => {
    store.setToggle(key, true)
  }, [key, store])

  const close = useCallback(() => {
    store.setToggle(key, false)
  }, [key, store])

  const toggle = useCallback(() => {
    store.toggle(key)
  }, [key, store])

  const reset = useCallback(() => {
    store.reset()
  }, [store])

  return {
    isOpen,
    open,
    close,
    toggle,
    reset // Provide reset through the hook
  }
}
