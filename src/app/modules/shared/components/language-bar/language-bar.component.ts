import { LanguageService } from '../../services/language/language.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-language-bar',
  templateUrl: './language-bar.component.html',
  styleUrls: ['./language-bar.component.scss'],
})
export class LanguageBarComponent {
  constructor(public LanguageS: LanguageService) {}
  isLanguageList = false;

  toggleLangugeList() {
    this.isLanguageList = !this.isLanguageList;
  }
  changeLanguage(id: number) {
    this.LanguageS.changeLanguge(id);
    this.toggleLangugeList();
  }
}
