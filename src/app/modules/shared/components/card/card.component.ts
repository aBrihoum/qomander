import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() cardData!: any;
  @Output() cardClickedEvent = new EventEmitter<any>();

  cardClicked() {
    this.cardClickedEvent.emit(this.cardData);
  }
}
