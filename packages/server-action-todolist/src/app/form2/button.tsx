'use client';

import { createToDoDirectly } from './actions';

// @ts-ignore
export default function Button({ children }) {
  return (
    <button
      onClick={async () => {
        const data = await createToDoDirectly('运动');
        alert(JSON.stringify(data));
      }}
    >
      {children}
    </button>
  );
}
