import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageBarComponent } from './components/language-bar/language-bar.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [LanguageBarComponent, CardComponent],
  imports: [CommonModule],
  exports: [LanguageBarComponent, CardComponent],
})
export class SharedModule {}
