import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'welcome',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'menu',
    loadChildren: () => import('./modules/menu/menu.module').then((m) => m.MenuModule),
  },
  {
    path: 'options',
    loadChildren: () =>
      import('./modules/meal-options/meal-options.module').then((m) => m.MealOptionsModule),
  },
  {
    path: 'order-detail',
    loadChildren: () =>
      import('./modules/order-detail/order-detail.module').then((m) => m.OrderDetailModule),
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
