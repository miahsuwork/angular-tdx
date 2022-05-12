import { FormService } from 'src/app/core/services/form.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AesRsaService } from '../../services/aes-rsa.service';
import { Component, OnInit } from '@angular/core';
import {
  encryptByAES,
  encryptByRSA,
} from 'src/app/core/utils/encryption-decryption-helper';
import { AesRsaRequest } from '../../models/aes-rsa-request.model';
import { AesRsaResponse } from '../../models/aes-rsa-response.model';

@Component({
  selector: 'app-aes-rsa',
  templateUrl: './aes-rsa.component.html',
  styleUrls: ['./aes-rsa.component.scss'],
})
export class AesRsaComponent implements OnInit {
  publicKey = '';
  aesKey = '1234567890123456';
  requestData: AesRsaRequest;
  responseData: AesRsaResponse;
  formData: FormControl;
  constructor(
    private aesRsaService: AesRsaService,
    private fb: FormBuilder,
    private formService: FormService
  ) {
    this.formData = this.fb.control('', Validators.required);
  }

  sendData() {
    if (this.formData.invalid) {
      this.formService.validateField(this.formData);
      return;
    }

    this.requestData = {
      encryptKey: encryptByRSA(this.aesKey, this.publicKey),
      encryptData: encryptByAES(this.formData.value, this.aesKey),
    };

    this.aesRsaService
      .privateDecrypt(this.requestData)
      .subscribe((response) => {
        this.responseData = response;
      });
  }

  ngOnInit(): void {
    this.aesRsaService.getPublicKey().subscribe((response) => {
      this.publicKey = response.publicKey;
    });
  }
}
