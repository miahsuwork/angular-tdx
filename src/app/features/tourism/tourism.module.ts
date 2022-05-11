import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourismRoutingModule } from './tourism-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { DetailComponent } from './pages/detail/detail.component';

@NgModule({
  declarations: [HomeComponent, SearchComponent, DetailComponent],
  imports: [CommonModule, TourismRoutingModule, SharedModule],
})
export class TourismModule {}
