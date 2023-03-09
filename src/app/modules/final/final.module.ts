import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FinalComponent } from './components/final.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: FinalComponent }];

@NgModule({
  declarations: [FinalComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class FinalModule {}
