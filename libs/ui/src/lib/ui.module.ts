import { LoadingComponent } from './components/loading/loading.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

export const materialModules = [MatProgressSpinnerModule];

const components = [LoadingComponent];

@NgModule({
  imports: [CommonModule, FlexLayoutModule, RouterModule, ...materialModules],
  declarations: [...components],
  exports: [...components],
})
export class UiModule {}
