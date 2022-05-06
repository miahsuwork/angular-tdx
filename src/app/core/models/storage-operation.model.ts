export interface StorageOperation {
  setItem: (key: string, value: any) => void;
  getItem: (key: string) => any;
  removeItem: (key: string) => void;
  clear: () => void;
}
