import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { MealListT } from 'src/app/modules/shared/services/meal-list/meal-list.model';
import { MealListService } from './../../../shared/services/meal-list/meal-list.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(private MealList$: MealListService) {}

  // ~~ ~~ ~~
  mealList: MealListT[] = this.MealList$.returnMealList();
  @ViewChild('menuItems') menuItemsRef?: ElementRef<HTMLDivElement>;
  showScrollShadow = false;
  // ~~ ~~ ~~

  refreshMealList() {
    this.mealList = this.MealList$.returnMealList();
  }

  divHaveScrollBar() {
    /* 
    check if the menuItems container has a scrollbar,
    if yes, we add at the bottom of this div a shadow to instruct the user that he can scroll
    https://prnt.sc/qFs4XX6LNKHj
    */
    const haveAScrollBar =
      this.menuItemsRef &&
      this.menuItemsRef.nativeElement.scrollHeight > this.menuItemsRef.nativeElement.clientHeight;

    haveAScrollBar ? (this.showScrollShadow = true) : (this.showScrollShadow = false);
  }
}
