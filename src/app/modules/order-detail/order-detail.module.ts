import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OrderDetailComponent } from './components/order-detail.component';

const routes: Routes = [{ path: '', component: OrderDetailComponent }];

@NgModule({
  declarations: [OrderDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OrderDetailModule {}
