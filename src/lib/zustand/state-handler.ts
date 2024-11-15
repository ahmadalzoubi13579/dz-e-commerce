/* eslint-disable @typescript-eslint/no-explicit-any */

function stateHandler(state: any, slot: string, set: any) {
  if (typeof state === 'object') {
    set({
      [slot]: {
        ...state,
      },
    });
  } else if (typeof state === 'function') {
    set((prevState: any) => ({
      [slot]: {
        ...state(prevState[slot]),
      },
    }));
  }
}

export { stateHandler };
