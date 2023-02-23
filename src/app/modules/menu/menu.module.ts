import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [{ path: '', component: MenuComponent }];

@NgModule({
  declarations: [MenuComponent, CategoriesComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class MenuModule {}
