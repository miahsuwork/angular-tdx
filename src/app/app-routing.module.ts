import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './preset/components/layout/layout.component';
import { PageNotFoundComponent } from './preset/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'proxy',
    loadChildren: () =>
      import('./features/proxy/proxy.module').then((m) => m.ProxyModule),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'attraction',
        loadChildren: () =>
          import('./features/attraction/attraction.module').then(
            (m) => m.AttractionModule
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
