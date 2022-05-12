import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RedirectComponent } from './features/tourism/pages/redirect/redirect.component';
import { LayoutComponent } from './preset/components/layout/layout.component';
import { PageNotFoundComponent } from './preset/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'other',
    loadChildren: () =>
      import('./features/other/other.module').then((m) => m.OtherModule),
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
    ],
  },
  {
    path: 'redirect',
    component: RedirectComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
