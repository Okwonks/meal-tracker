import { Component, Input} from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  template: `
  <div>
    <label *ngIf="meal.done === true" class="label label-danger" (click)="toggleDone(false)">{{meal.calories}}</label>
    <label *ngIf="meal.done === false" class="label label-default" (click)="toggleDone(true)">{{meal.calories}}</label>
  </div>
  `
})

export class MealComponent {
  @Input() meal: Meal;
  toggleDone(setCalories: boolean){
    this.meal.done = setCalories;
  }
}
