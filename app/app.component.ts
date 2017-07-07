import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <div class="page-header">
    <h1>Track Your Meals</h1>
  </div>
    <meal-list [childMealList]="mainMealList" (clickSender)="showDetails($event)"></meal-list>
    <div class="container-fluid">
      <div class="row">
      <new-meal (newMealSender)="addMeal($event)"></new-meal>
    <edit-meal [childSelectedMeal]="selectedMeal" (doneClickedSender)="finishedEditing()"></edit-meal>
      </div>
    </div>
    <br>
  </div>
  `
})

export class AppComponent {
  public mainMealList: Meal [] = [
    new Meal("Breakfast", "Breakfast", "Describe me...", 200),
    new Meal("Lunch", "Whats for lunch...", "Describe me...", 200),
    new Meal("Dinner", "Before we sleep..", "Describe me...", 200),
  ];
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
  addMeal(newMealFromChild: Meal) {
    this.mainMealList.push(newMealFromChild);
  }
}
