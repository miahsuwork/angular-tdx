import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { SearchComponent } from './features/tourism/pages/search/search.component';
import { LayoutComponent } from './preset/components/layout/layout.component';
import { PageNotFoundComponent } from './preset/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'proxy',
    loadChildren: () =>
      import('./features/proxy/proxy.module').then((m) => m.ProxyModule),
  },
  {
    path: 'aes-rsa',
    loadChildren: () =>
      import('./features/aes-rsa/aes-rsa.module').then((m) => m.AesRsaModule),
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/tourism/tourism.module').then(
            (m) => m.TourismModule
          ),
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
