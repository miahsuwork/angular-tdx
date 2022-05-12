import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AesRsaComponent } from './pages/aes-rsa/aes-rsa.component';
import { ProxyComponent } from './pages/proxy/proxy.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: 'proxy',
    component: ProxyComponent,
  },
  {
    path: 'aes-rsa',
    component: AesRsaComponent,
  },
  {
    path: 'user',
    component: UsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherRoutingModule {}
