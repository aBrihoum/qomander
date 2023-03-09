import { NotoficationService } from './../../services/notification/notofication.service';
import { LanguageService } from '../../services/language/language.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-language-bar',
  templateUrl: './language-bar.component.html',
  styleUrls: ['./language-bar.component.scss'],
})
export class LanguageBarComponent {
  constructor(
    public LanguageService: LanguageService,
    private NotoficationService: NotoficationService
  ) {}
  isLanguageList = false;

  toggleLangugeList() {
    this.isLanguageList = !this.isLanguageList;
  }
  changeLanguage(id: number) {
    this.LanguageService.changeLanguge(id);
    this.toggleLangugeList();
    this.NotoficationService.trigger();
  }
}
