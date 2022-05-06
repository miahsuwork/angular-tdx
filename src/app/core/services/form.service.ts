import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}

  /**
   * @description 清空表單所有值
   * @param formGroup 表單群組
   */
  setAllFromFieldsValueEmpty(formGroup: FormGroup | FormArray): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.reset('');
      } else if (control instanceof FormGroup || control instanceof FormArray) {
        this.setAllFromFieldsValueEmpty(control);
      }
    });
  }

  /**
   * @description 檢查表單是否有值
   * @param formGroup 表單群組
   */
  checkAllFromFieldsValueIsEmpty(formGroup: FormGroup | FormArray): boolean {
    let isEmpty = true;
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        if (control.value) {
          isEmpty = false;
        }
      } else if (control instanceof FormGroup || control instanceof FormArray) {
        this.setAllFromFieldsValueEmpty(control);
      }
    });
    return isEmpty;
  }

  /**
   * @description 驗證表單所有欄位
   * @param formGroup 表單群組
   */
  validateAllFormFields(formGroup: FormGroup | FormArray): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup || control instanceof FormArray) {
        this.validateAllFormFields(control);
      }
    });
  }

  /**
   * @description 驗證欄位
   * @param formControl 表單欄位
   */
  validateField(formControl: FormControl): void {
    formControl.markAsTouched({ onlySelf: true });
    formControl.markAsDirty({ onlySelf: true });
  }

  /**
   * @description 將表單所有欄位標記為 Untouched
   * @param formGroup 表單群組
   */
  setAllFromUntouchedFields(formGroup: FormGroup | FormArray): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsUntouched({ onlySelf: true });
        if (!control.value) {
          // 先輸入再刪除的情況下會需要 reset 才能取消必填
          control.reset();
        }
      } else if (control instanceof FormGroup || control instanceof FormArray) {
        this.setAllFromUntouchedFields(control);
      }
    });
  }

  /**
   * @description 將欄位標記為 Untouched --> 取消必填錯誤
   * @param formControl 表單欄位
   */
  setUntouchedField(formControl: FormControl): void {
    formControl.markAsUntouched({ onlySelf: true });
    if (!formControl.value) {
      // 先輸入再刪除的情況下會需要 reset 才能取消必填
      formControl.reset();
    }
  }

  /**
   * @description append 到 formDat
   * @param formGroup 表單群組
   */
  appendAllFromFieldsToFormData(formGroup: FormGroup | FormArray): FormData {
    const formData = new FormData();
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        if (control.value instanceof File) {
          formData.append(field, control.value, control.value.name);
        }
        formData.append(field, control.value);
      } else if (control instanceof FormGroup || control instanceof FormArray) {
        this.appendAllFromFieldsToFormData(control);
      }
    });

    return formData;
  }
}
