const getLocaleStorage = (key: string) =>
  typeof window !== 'undefined' ? JSON.parse(localStorage.getItem(key) as string) : null;
const setLocaleStorage = (key: string, data: unknown) =>
  typeof window !== 'undefined' ? localStorage.setItem(key, JSON.stringify(data)) : null;

export { getLocaleStorage, setLocaleStorage };
