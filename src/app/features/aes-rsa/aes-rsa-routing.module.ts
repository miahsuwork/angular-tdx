import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AesRsaComponent } from './pages/aes-rsa/aes-rsa.component';

const routes: Routes = [
  {
    path: '',
    component: AesRsaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AesRsaRoutingModule {}
