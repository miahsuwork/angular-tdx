import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SafePipe } from './pipes/safe.pipe';
import { OverlayModule } from '@angular/cdk/overlay';

const materialModules = [
  MatListModule,
  MatTableModule,
  MatButtonModule,
  MatSelectModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatGridListModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [SafePipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ...materialModules],
  exports: [
    SafePipe,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    OverlayModule,
    ...materialModules,
  ],
})
export class SharedModule {}
