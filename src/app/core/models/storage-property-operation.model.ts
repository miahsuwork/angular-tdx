export interface StoragePropertyOperation<T> {
  setItem: (value: any) => void;
  getItem: () => T | null;
  removeItem: () => void;
}
