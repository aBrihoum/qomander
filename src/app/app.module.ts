import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'menu',
    loadChildren: () => import('./modules/menu/menu.module').then((m) => m.MenuModule),
  },
  {
    path: 'options',
    loadChildren: () =>
      import('./modules/customization/customization.module').then((m) => m.CustomizationModule),
  },
  {
    path: 'order-detail',
    loadChildren: () => import('./modules/final/final.module').then((m) => m.FinalModule),
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
