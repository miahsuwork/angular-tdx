import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AesRsaComponent } from './pages/aes-rsa/aes-rsa.component';
import { AesRsaRoutingModule } from './aes-rsa-routing.module';

@NgModule({
  declarations: [AesRsaComponent],
  imports: [CommonModule, AesRsaRoutingModule, SharedModule],
})
export class AesRsaModule {}
