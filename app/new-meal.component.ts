import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template:`
  <div class="col-md-7">
    <h3>New Meal</h3>
    <div class="row">
    <div class="col-md-5">
    <div>
      <input #newType class="form-control" placeholder="New meal type">
    </div>
    <div>
      <input #newMeal class="form-control" type="text" placeholder="What did you eat">
    </div>
    <div>
      <input #newDescription class="form-control" type="text" placeholder="Description">
    </div>
    <div>
      <input #newCalories class="form-control" type="number" placeholder="Calories">
    </div>
    <br>
    <button class="btn btn-primary btn-sm" (click)="addMealClicked(newType.value, newMeal.value, newDescription.value, newCalories.value); newType.value=''; newMeal.value=''; newDescription.value=''; newCalories.value=''">Add Meal</button>
    <!--this is where the form ends-->
    </div>
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addMealClicked(type: string, meal: string, description: string, calories: number) {
    var newMealToAdd: Meal = new Meal(type, meal, description, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
