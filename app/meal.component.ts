import { Component, Input} from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  template: `
  <div>
    <span *ngIf="meal.done === true" class="label label-danger" (click)="toggleDone(false)">{{meal.calories}}</span>
    <span *ngIf="meal.done === false" class="label label-default" (click)="toggleDone(true)">{{meal.calories}}</span>
  </div>
  `
})

export class MealComponent {
  @Input() meal: Meal;
  toggleDone(setCalories: boolean){
    this.meal.done = setCalories;
  }
}
