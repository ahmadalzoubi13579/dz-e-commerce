import { create, StateCreator } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { StoreOptions } from './types';

function createGlobalStore<T>(
  initializer: StateCreator<T>,
  options?: StoreOptions,
) {
  let useStore = null;

  if (options?.persist && typeof window !== 'undefined') {
    useStore = create(
      persist(initializer, {
        name: options.key,
        storage: createJSONStorage(() => window[options.storage]),
      }),
    );
  } else {
    useStore = create<T>(initializer);
  }

  return useStore;
}

export { createGlobalStore };
