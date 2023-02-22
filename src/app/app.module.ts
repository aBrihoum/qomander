import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
