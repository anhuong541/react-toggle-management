type ToggleState = Record<string, boolean>
type Listener = () => void

export type ToggleStore = {
  getState: () => ToggleState
  subscribe: (listener: Listener) => () => void
  setToggle: (key: string, value: boolean) => void
  toggle: (key: string) => void
  reset: () => void // Add a reset function
}

export const createToggleStore = (
  initialState: ToggleState = {}
): ToggleStore => {
  let state: ToggleState = initialState
  const listeners = new Set<Listener>()

  const getState = () => state

  const subscribe = (listener: Listener) => {
    listeners.add(listener)
    return () => listeners.delete(listener)
  }

  const setToggle = (key: string, value: boolean) => {
    if (state[key] === value) return // Avoid unnecessary updates
    state = { ...state, [key]: value }
    listeners.forEach((listener) => listener())
  }

  const toggle = (key: string) => {
    const current = state[key] ?? false
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
