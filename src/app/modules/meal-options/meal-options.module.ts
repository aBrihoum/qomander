import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MealOptionsComponent } from './components/meal-options.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: MealOptionsComponent }];

@NgModule({
  declarations: [MealOptionsComponent],
  imports: [CommonModule, RouterModule.forChild(routes),SharedModule],
})
export class MealOptionsModule {}
