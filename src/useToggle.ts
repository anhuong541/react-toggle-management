'use client'

import { useContext, useCallback, useSyncExternalStore } from 'react'
import ToggleStateContext from './ToggleContext'

export function useToggle(defaultKey: string) {
  const store = useContext(ToggleStateContext)

  if (!store) {
    throw new Error(
      'useToggle must be used within a ToggleStateContextProvider'
    )
  }

  const isOpen = useSyncExternalStore(
    store.subscribe,
    () => store.getState()[defaultKey] ?? false,
    () => false // <-- getServerSnapshot fallback
  )

  const getIsOpen = useCallback(
    (key?: string) => {
      return store.getState()[key ?? defaultKey] ?? false
    },
    [defaultKey, store]
  )

  const open = useCallback(
    (key?: string) => {
      store.setToggle(key ?? defaultKey, true)
    },
    [defaultKey, store]
  )

  const close = useCallback(
    (key?: string) => {
      store.setToggle(key ?? defaultKey, false)
    },
    [defaultKey, store]
  )

  const toggle = useCallback(
    (key?: string) => {
      store.toggle(key ?? defaultKey)
    },
    [defaultKey, store]
  )

  const reset = useCallback(
    (key?: string) => {
      if (key) {
        const initialValue = store.getState()[key] ?? false
        store.setToggle(key, initialValue)
      } else {
        store.reset()
      }
    },
    [store]
  )

  return {
    isOpen,
    open,
    close,
    toggle,
    reset,
    getIsOpen
  }
}
