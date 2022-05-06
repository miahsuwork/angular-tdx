import { Injectable } from '@angular/core';
import { StorageOperation } from '../models/storage-operation.model';
import { StoragePropertyOperation } from '../models/storage-property-operation.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  /**
   * @description 所有 sessionStorage 或 localStorage 使用 key
   */
  readonly keys = {
    Authorization: 'authorization',
  };
  constructor() {}

  private setItem(storage: Storage, key: string, value: any): void {
    if (storage && key && value) {
      storage.setItem(key, JSON.stringify(value));
    }
  }

  private getItem<T>(storage: Storage, key: string): T | null {
    if (storage && key) {
      const value = storage.getItem(key);
      if (!value) {
        return null;
      } else {
        return JSON.parse(value) as T;
      }
    }

    return null;
  }

  private removeItem(storage: Storage, key: string): void {
    if (storage && key) {
      storage.removeItem(key);
    }
  }

  private clear(storage: Storage): void {
    if (storage) {
      storage.clear();
    }
  }

  private getStorageOperators(storage: Storage): StorageOperation {
    return {
      setItem: (key: string, value: any) => {
        this.setItem(storage, key, value);
      },
      getItem: (key: string) => {
        return this.getItem(storage, key) as any;
      },
      removeItem: (key: string) => {
        this.removeItem(storage, key);
      },
      clear: () => {
        this.clear(storage);
      },
    };
  }

  private getPropertyOperators<T>(
    storage: Storage,
    key: string
  ): StoragePropertyOperation<T> {
    return {
      setItem: (value: any) => {
        this.setItem(storage, key, value);
      },
      getItem: () => {
        return this.getItem<T>(storage, key) as T;
      },
      removeItem: () => {
        this.removeItem(storage, key);
      },
    };
  }

  /**
   * @description 提供操作 localStorage 的方法
   */
  get local(): StorageOperation {
    return this.getStorageOperators(window.localStorage);
  }

  /**
   * @description 提供操作 sessionStorage 的方法
   */
  get session(): StorageOperation {
    return this.getStorageOperators(window.sessionStorage);
  }

  /**
   * @description 提供操作 Token 在 session storage 存取的方法
   */
  get token(): StoragePropertyOperation<string> {
    return this.getPropertyOperators<string>(
      window.sessionStorage,
      this.keys.Authorization
    );
  }
}
