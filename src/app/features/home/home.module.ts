import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { DetailComponent } from '../../shared/components/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from 'src/app/shared/components/search/search.component';

@NgModule({
  declarations: [HomeComponent, SearchComponent, DetailComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
