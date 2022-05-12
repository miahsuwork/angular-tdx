import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourismDetailComponent } from './pages/tourism-detail/detail.component';
import { TourismHomeComponent } from './pages/tourism-home/tourism-home.component';
import { TourismSearchComponent } from './pages/tourism-search/tourism-search.component';

const routes: Routes = [
  {
    path: '',
    component: TourismHomeComponent,
  },
  {
    path: 'search',
    redirectTo: 'search/scenic-spot',
    pathMatch: 'full',
  },
  {
    path: 'search/:tourismType',
    component: TourismSearchComponent,
  },
  {
    path: 'search/:tourismType/:id',
    component: TourismDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TourismRoutingModule {}
