import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherRoutingModule } from './other-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AesRsaComponent } from './pages/aes-rsa/aes-rsa.component';
import { ProxyComponent } from './pages/proxy/proxy.component';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [AesRsaComponent, ProxyComponent, UsersComponent],
  imports: [CommonModule, OtherRoutingModule, SharedModule],
})
export class OtherModule {}
