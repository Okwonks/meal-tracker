import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div class="form-group" id="select">
    <select (change)="onChange($event.target.value)" class="form-control">
      <option value="all">Show all.. </option>
      <option value="gains">Low Calories.. </option>
      <option value="loses" selected="selected">High Calories.. </option>
    </select>
  </div>
  <br>
  <br>
    <div class="row">
      <div class="col-md-4" *ngFor="let currentMeal of childMealList">
      <div class="well" id="meal-well">
        <h3>{{currentMeal.type}}</h3>
        <h5>{{currentMeal.meal}}</h5>
        <p>{{currentMeal.description}}</p>
        <span class="label label-default">{{currentMeal.calories}} Calories</span>
        <!--<meal-display [meal]="currentMeal"></meal-display>-->
        <hr>
        <button class="btn btn-info btn-sm" (click)="editMealClicked(currentMeal)">Edit</button>
        </div>
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
