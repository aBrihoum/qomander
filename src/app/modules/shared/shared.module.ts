import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageBarComponent } from './components/language-bar/language-bar.component';

@NgModule({
  declarations: [LanguageBarComponent],
  imports: [CommonModule],
  exports: [LanguageBarComponent],
})
export class SharedModule {}
