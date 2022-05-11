import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private snackBar: MatSnackBar) {}

  /**
   * @description 顯示 "錯誤" 訊息
   * @param detail Detail text of the message.
   * @param sticky Whether the message should be automatically closed based on life property or kept visible.
   * @param key Key of the message in case message is targeted to a specific toast component.
   */
  error(detail: string, sticky?: boolean, key?: string): void {
    this.snackBar.open(detail, '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
