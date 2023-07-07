import { MealOptionsService } from '../../../shared/services/meal-options/meal-options.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  MealOptionsT,
  StepsT,
} from 'src/app/modules/shared/services/meal-options/meal-options.model';
@Component({
  selector: 'app-meal-options-list',
  templateUrl: './options-list.component.html',
  styleUrls: ['./options-list.component.scss'],
})
export class MealOptionsListComponent {
  constructor(private MealOptionsService: MealOptionsService, private route: Router) {}

  @Output() updateSelectedOptionsEvent = new EventEmitter<boolean>();

  currentStepIndex = 0;
  steps: StepsT[] = this.MealOptionsService.steps;
  selectedStep = this.steps[this.currentStepIndex];

  optionClicked(option: MealOptionsT) {
    let stepSelectedOptions = this.selectedStep.selectedOptions;
    let indexOfSelectedOption = stepSelectedOptions.findIndex((el) => el.name === option.name);
    //* if not selected, add it to selectedOptions array
    if (indexOfSelectedOption === -1) {
      //* if canSelect = 1, you only can add 1
      if (this.selectedStep.canSelect === 1) {
        stepSelectedOptions = [option];
      } else if (this.selectedStep.canSelect === 0) {
        //* if canSelect = 0, means add as much as you want
        stepSelectedOptions = [...stepSelectedOptions, option];
      } else if (this.selectedStep.canSelect === 2) {
        //* if canSelect = 2, you only can add 2
        if (stepSelectedOptions.length < this.selectedStep.canSelect) {
          stepSelectedOptions = [...stepSelectedOptions, option];
        } else {
          //* if the user selected more than `canSelect`, we remove the first item to add what the user newly selected
          stepSelectedOptions = [...stepSelectedOptions.slice(1), option];
        }
      }
    } else {
      //* if selected and clicked again, remove it from selectedOptions array
      stepSelectedOptions.splice(indexOfSelectedOption, 1);
    }
    this.selectedStep.selectedOptions = stepSelectedOptions;
    this.isOptionSelected();
  }

  isOptionSelected() {
    this.selectedStep.options.forEach((originalEl) => {
      this.selectedStep.selectedOptions.includes(originalEl)
        ? (originalEl.selected = true)
        : (originalEl.selected = false);
    });
  }

  updateSelectedMealOptions(option: MealOptionsT[]) {
    this.MealOptionsService.setSelectedMealOptions(option, this.currentStepIndex);
    this.updateSelectedOptionsEvent.emit(true);
  }

  nextButton() {
    this.updateSelectedMealOptions(this.selectedStep.selectedOptions);
    if (this.steps.length - 1 > this.currentStepIndex) {
      ++this.currentStepIndex;
    } else {
      this.route.navigate(['/order-detail']);
    }
    this.refreshVars();
  }

  backButton() {
    if (this.currentStepIndex === 0) {
      //sorry, too lazy to reset all the already modified vars, so i just refresh
      this.route.navigate(['/menu']).then(() => window.location.reload());
    } else {
      --this.currentStepIndex;
    }
    this.refreshVars();
  }

  refreshVars() {
    this.selectedStep = this.steps[this.currentStepIndex];
  }
}
