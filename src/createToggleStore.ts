type ToggleState = Set<string>
type Listener = () => void

export type ToggleStore = {
  getState: () => ToggleState
  subscribe: (listener: Listener) => () => void
  setToggle: (key: string, value: boolean) => void
  toggle: (key: string) => void
  reset: () => void
  resetKey: (key: string) => void
}

export const createToggleStore = (
  initialState: ToggleState = new Set()
): ToggleStore => {
  const initialSnapshot = new Set(initialState)
  let state: ToggleState = new Set(initialState)
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

  const resetKey = (key: string) => {
    setToggle(key, initialSnapshot.has(key))
  }

  const reset = () => {
    state = new Set(initialSnapshot)
    listeners.forEach((listener) => listener())
  }

  return {
    getState,
    subscribe,
    setToggle,
    toggle,
    reset,
    resetKey
  }
}
