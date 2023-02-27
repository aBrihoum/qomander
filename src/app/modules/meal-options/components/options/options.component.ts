import { MealOptionsService } from './../../../shared/services/meal-options/meal-options.service';
import { Component } from '@angular/core';
import { MealOptionsT } from 'src/app/modules/shared/services/meal-options/meal-options.model';
@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class MeatOptionsComponent {
  constructor(private MealOptionsService: MealOptionsService) {}

  currentStepIndex = 0;
  steps = [
    {
      name: 'meat',
      heading: 'Select the meat type:',
      canSelect: 1,
      data: this.MealOptionsService.returnMeatOptions(),
      selectedOptions: [] as MealOptionsT[],
    },
    {
      name: 'sauce',
      heading: 'Select the sauce type:',
      canSelect: 2,
      data: this.MealOptionsService.returnSauceOptions(),
      selectedOptions: [] as MealOptionsT[],
    },
    {
      name: 'garnish',
      heading: 'Select additional garnish:',
      canSelect: 0,
      data: this.MealOptionsService.returnGarnishOptions(),
      selectedOptions: [] as MealOptionsT[],
    },
  ];

  addOption(option: MealOptionsT) {
    let selectedOptions = this.steps[this.currentStepIndex].selectedOptions;
    let indexOfOption = selectedOptions.indexOf(option);
    if (this.steps[this.currentStepIndex].canSelect === 1) {
      selectedOptions = [option];
    } else {
      if (indexOfOption === -1) {
        //* if not selected, add it to selectedOptions array
        if (this.steps[this.currentStepIndex].canSelect === 0) {
          //* if canSelect = 0, means add as much as you want
          selectedOptions = [...selectedOptions, option];
        } else {
          //* if canSelect = 2, you only can add 2
          if (selectedOptions.length < this.steps[this.currentStepIndex].canSelect) {
            selectedOptions = [...selectedOptions, option];
          } else {
            //* if the user selected more than `canSelect`, we remove the first item to add what the user newly selected
            selectedOptions = [...selectedOptions.slice(1), option];
          }
        }
      } else {
        //* if selected and clicked again, remove it from selectedOptions array
        selectedOptions.splice(indexOfOption, 1);
      }
    }
    this.steps[this.currentStepIndex].selectedOptions = selectedOptions;
    this.isOptionSelected();
    console.log(selectedOptions);
  }

  isOptionSelected() {
    let selectedOptions = this.steps[this.currentStepIndex].selectedOptions;
    this.steps[this.currentStepIndex].data.forEach((originalEl) => {
      selectedOptions.includes(originalEl)
        ? (originalEl.selected = true)
        : (originalEl.selected = false);
    });
  }

  nextButton() {
    this.steps.length - 1 > this.currentStepIndex
      ? ++this.currentStepIndex
      : console.log(this.steps);
    // this.selectedOptions = [];
  }
}
