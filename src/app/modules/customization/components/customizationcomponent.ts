import { Router } from '@angular/router';
import { MealListT } from 'src/app/modules/shared/services/meal-list/meal-list.model';
import { MealOptionsService } from '../../shared/services/meal-options/meal-options.service';
import { Component, ViewChild } from '@angular/core';
import { MealOptionsT } from '../../shared/services/meal-options/meal-options.model';
import { MealOptionsListComponent } from './options-list/options-list.component';

@Component({
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.scss'],
})
export class CustomizationComponent {
  constructor(private MealOptionsService: MealOptionsService, private route: Router) {}

  @ViewChild(MealOptionsListComponent) optionsComponent!: MealOptionsListComponent;

  readonly selectedMeal: MealListT = this.MealOptionsService.returnSelectedMeal();
  selectedOptions: MealOptionsT[] = this.MealOptionsService.returnSelectedMealOptions();
  optionsTotalPrice: number = this.MealOptionsService.returnSelectedMealOptionsTotalPrice();
  selectedMealQuantity = this.MealOptionsService.returnSelectedMealQuantity();

  refreshVars() {
    // called from `options-list _ @Output`
    this.selectedOptions = this.MealOptionsService.returnSelectedMealOptions();
    this.optionsTotalPrice = this.MealOptionsService.returnSelectedMealOptionsTotalPrice();
  }

  changeSelectedMealQuantity(op: '+' | '-') {
    this.selectedMealQuantity = this.MealOptionsService.updateSelectedMealQuantity(op);
  }

  backButton() {
    this.optionsComponent.backButton();
  }

  ngOnInit() {
    if (Object.keys(this.selectedMeal).length === 0) {
      // this.route.navigate(['/menu']);
    }
  }
}
