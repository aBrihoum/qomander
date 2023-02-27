import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MealOptionsComponent } from './components/options-container.component';
import { SharedModule } from '../shared/shared.module';
import { MeatOptionsComponent } from './components/options/options.component';

const routes: Routes = [
  {
    path: '',
    component: MealOptionsComponent,
    // children: [
    //   { path: '', redirectTo: 'meat', pathMatch: 'full' },
    //   {
    //     path: 'meat',
    //     component: MeatOptionsComponent,
    //   },
    // ],
  },
];

@NgModule({
  declarations: [MealOptionsComponent, MeatOptionsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class MealOptionsModule {}
