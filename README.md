# React Toggle Global Management

A lightweight React library for managing toggleable global state—designed to be simpler than Zustand and more focused than Redux.

## Installation

Install the package via npm or yarn:

```bash
npm install react-toggle-management
# or
yarn add react-toggle-management
# or
pnpm install react-toggle-management
#or 
bun install react-toggle-management
```

## Usage

Wrap the ToggleGlobalProvider component at your layout.

```tsx
import React from "react";
import { ToggleGlobalProvider } from "react-toggle-management";

const LayoutProvider = ({ children } : { children: ReactNode }) => {
  return (
    <div>
        <ToggleGlobalProvider>  
            {children}
        </ToggleGlobalProvider>
    </div>
  );
};

export default LayoutProvider;
```

Import useToggle hook to handle toggle state

```tsx
import { useToggle } from 'react-toggle-management'

export default function Component() {
  const { toggle, isOpen, open, close, reset } = useToggle('toggle-key-input')
  return (
    <div className="space-y-2 space-x-3 p-5">
      <button className={styleButton} onClick={toggle}>
        Toggle
      </button>
      <button className={styleButton} onClick={open}>
        Open
      </button>
      <button className={styleButton} onClick={close}>
        Close
      </button>
      <button className={styleButton} onClick={reset}>
        Reset
      </button>
      <p>isOpen: {isOpen ? 'true' : 'false'}</p>
    </div>
  )
}
```

## Peer Dependencies

Make sure you have `react` and `react-dom` installed:

```bash
npm install react react-dom
```

## License

This project is licensed under the MIT License.

---

If you have any questions or issues, feel free to open an issue or contact the maintainer.
