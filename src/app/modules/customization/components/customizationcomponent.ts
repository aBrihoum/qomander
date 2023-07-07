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

  readonly selectedMeal: MealListT = this.MealOptionsService.selectedMeal;
  selectedOptions: MealOptionsT[] = this.MealOptionsService.selectedMealOptions;
  optionsTotalPrice: number = this.MealOptionsService.selectedMealOptionsTotalPrice;
  selectedMealQuantity = this.MealOptionsService.selectedMealQuantity;

  refreshVars() {
    // called from `options-list _ @Output`
    this.selectedOptions = this.MealOptionsService.selectedMealOptions;
    this.optionsTotalPrice = this.MealOptionsService.selectedMealOptionsTotalPrice;
  }

  changeSelectedMealQuantity(op: '+' | '-') {
    this.selectedMealQuantity = this.MealOptionsService.setSelectedMealQuantity(op);
  }

  backButton() {
    this.optionsComponent.backButton();
  }

  ngOnInit() {
    if (Object.keys(this.selectedMeal).length === 0) {
      this.route.navigate(['/menu']);
    }
  }
}
