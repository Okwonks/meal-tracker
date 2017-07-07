import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div class="row">
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all">Show all</option>
      <option value="gains">Show Done</option>
      <option value="loses" selected="selected">Show Not Done</option>
    </select>
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
  public selectedCalories: string = "all"
  onChange(optionFromMenu){
    this.selectedCalories = optionFromMenu;
    console.log(this.selectedCalories);
  }
  editMealClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
