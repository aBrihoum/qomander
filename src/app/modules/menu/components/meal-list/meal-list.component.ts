import { Component, ElementRef, ViewChild } from '@angular/core';
import { MealListT } from 'src/app/modules/shared/services/meal-list/meal-list.model';
import { MealListService } from '../../../shared/services/meal-list/meal-list.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss'],
})
export class MealListComponent {
  constructor(private MealListService: MealListService) {}

  mealList: MealListT[] = this.MealListService.returnMealList();
  @ViewChild('menuItems') menuItemsRef?: ElementRef<HTMLDivElement>;
  showScrollShadow = false;

  refreshMealList() {
    this.mealList = this.MealListService.returnMealList();
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
