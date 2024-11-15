export type ZustandStateHandler<T> = (
  partial: T | Partial<T> | ((state: T) => T | Partial<T>),
  replace?: boolean | undefined,
) => void;

export interface StoreOptions {
  persist: boolean;
  key: string;
  storage: 'localStorage' | 'sessionStorage';
}
