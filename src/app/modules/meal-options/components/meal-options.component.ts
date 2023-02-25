import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-meal-options',
  templateUrl: './meal-options.component.html',
  styleUrls: ['./meal-options.component.scss'],
})
export class MealOptionsComponent {
  constructor() {}
  @ViewChild('mealOptions') mealOptionsRef?: ElementRef<HTMLDivElement>;
  showScrollShadow = true;
  divHaveScrollBar() {
    /* 
    check if the mealOptions container has a scrollbar,
    if yes, we add at the bottom of this div a shadow to instruct the user that he can scroll
    https://prnt.sc/qFs4XX6LNKHj
    */
    const haveAScrollBar =
      this.mealOptionsRef &&
      this.mealOptionsRef.nativeElement.scrollHeight >
        this.mealOptionsRef.nativeElement.clientHeight;

    haveAScrollBar ? (this.showScrollShadow = true) : (this.showScrollShadow = false);
  }
}
