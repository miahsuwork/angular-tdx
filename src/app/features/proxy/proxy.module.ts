import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProxyRoutingModule } from './proxy-routing.module';
import { ProxyComponent } from './pages/proxy.component';

@NgModule({
  declarations: [ProxyComponent],
  imports: [CommonModule, ProxyRoutingModule],
})
export class ProxyModule {}
