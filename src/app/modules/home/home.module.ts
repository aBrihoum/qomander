import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: WelcomeComponent }];

@NgModule({
  declarations: [WelcomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class HomeModule {}
