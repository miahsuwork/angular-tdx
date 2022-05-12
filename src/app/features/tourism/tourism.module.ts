import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourismRoutingModule } from './tourism-routing.module';
import { TourismHomeComponent } from './pages/tourism-home/tourism-home.component';
import { TourismSearchComponent } from './pages/tourism-search/tourism-search.component';
import { TourismDetailComponent } from './pages/tourism-detail/detail.component';
import { TourismRedirectComponent } from './pages/tourism-redirect/tourism-redirect.component';

@NgModule({
  declarations: [
    TourismHomeComponent,
    TourismSearchComponent,
    TourismDetailComponent,
    TourismRedirectComponent,
  ],
  imports: [CommonModule, TourismRoutingModule, SharedModule],
})
export class TourismModule {}
