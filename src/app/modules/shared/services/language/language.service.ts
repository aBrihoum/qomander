import { Injectable } from '@angular/core';
import { languages as LANG } from './language.model';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor() {}
  languages = LANG;
  selectedLanguge = this.languages[0];

  changeLanguge(id: number) {
    let index = this.languages.findIndex((el) => el.id === id);
    this.selectedLanguge = this.languages[index];
    /* late night (1AM) idea : 
       the selected lang, will be removed from the array
       unshift it to became the first item on the array
       when we open the lang menu, it appears first
       https://prnt.sc/1EZp9Owj9cBS
    */
    let removedItem = this.languages.splice(index, 1)[0];
    this.languages.unshift(removedItem);
  }

  languagesList() {
    return this.languages;
  }
}
