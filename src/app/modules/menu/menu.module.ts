import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MealCategoriesComponent } from './components/meal-categories/categories.component';
import { MealListComponent } from './components/meal-list/meal-list.component';

const routes: Routes = [{ path: '', component: MealListComponent }];

@NgModule({
  declarations: [MealListComponent, MealCategoriesComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class MenuModule {}
