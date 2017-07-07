import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div class="row">
      <div class="col-md-4" *ngFor="let currentMeal of childMealList">
        <h3>{{currentMeal.type}}</h3>
        <h5>{{currentMeal.meal}}</h5>
        <p>{{currentMeal.description}}</p>
        <span class="label label-default">{{currentMeal.calories}} Calories</span>
        <!--<meal-display [meal]="currentMeal"></meal-display>-->
        <hr>
        <button class="btn btn-info btn-sm" (click)="editMealClicked(currentMeal)">Edit</button>
      </div>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  editMealClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
