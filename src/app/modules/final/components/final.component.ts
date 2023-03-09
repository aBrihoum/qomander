import { NotoficationService } from './../../shared/services/notification/notofication.service';
import { Router } from '@angular/router';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { MealListT } from '../../shared/services/meal-list/meal-list.model';
import { MealOptionsT } from '../../shared/services/meal-options/meal-options.model';
import { MealOptionsService } from '../../shared/services/meal-options/meal-options.service';
@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss'],
})
export class FinalComponent {
  constructor(
    private MealOptionsService: MealOptionsService,
    private NotoficationService: NotoficationService,
    private route: Router
  ) {}

  readonly selectedMeal: MealListT = this.MealOptionsService.returnSelectedMeal();
  selectedOptions: MealOptionsT[] = this.MealOptionsService.returnSelectedMealOptions();
  optionsTotalPrice: number = this.MealOptionsService.returnSelectedMealOptionsTotalPrice();
  selectedMealQuantity = this.MealOptionsService.returnSelectedMealQuantity();
  @ViewChild('optionsContainer') optionsContainer!: ElementRef<HTMLDivElement>;
  reset() {
    //sorry, too lazy to reset all the already modified vars, so i just refresh
    this.route.navigate(['/menu']).then(() => window.location.reload());
  }

  scrollEvent($event: WheelEvent) {
    let el = this.optionsContainer.nativeElement;
    el.scrollLeft += $event.deltaY < 0 ? -100 : 100;
  }

  notif() {
    this.NotoficationService.trigger();
  }

  ngOnInit() {
    if (Object.keys(this.selectedMeal).length === 0) {
      this.route.navigate(['/menu']);
    }
  }
}
