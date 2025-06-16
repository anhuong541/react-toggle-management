type ToggleState = Set<string>
type Listener = () => void

export type ToggleStore = {
  getState: () => ToggleState
  subscribe: (listener: Listener) => () => void
  setToggle: (key: string, value: boolean) => void
  toggle: (key: string) => void
  reset: () => void
}

export const createToggleStore = (
  initialState: ToggleState = new Set()
): ToggleStore => {
  let state: ToggleState = initialState
  const listeners = new Set<Listener>()

  const getState = () => state

  const subscribe = (listener: Listener) => {
    listeners.add(listener)
    return () => listeners.delete(listener)
  }

  const setToggle = (key: string, value: boolean) => {
    if (state.has(key) === value) return
    if (value) {
      state.add(key)
    } else {
      state.delete(key)
    }
    listeners.forEach((listener) => listener())
  }

  const toggle = (key: string) => {
    const current = state.has(key)
    setToggle(key, !current)
  }

  const reset = () => {
    state = initialState
    listeners.forEach((listener) => listener())
  }

  return {
    getState,
    subscribe,
    setToggle,
    toggle,
    reset
  }
}
