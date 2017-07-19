import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <div class="jumbotron" id="header">
  <div class="page-header">
    <h1>Track Your Meals</h1>
  </div>
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
  <div class="footer">
    <footer>
    <div id="footer">
      WillisCode © 2017
      <script>
        document.write(new Date().getFullYear());
      </script>
      All Rights Reserved
    </div>
    </footer>
  </div>
  `
})

export class AppComponent {
  public mainMealList: Meal [] = [
    new Meal("Breakfast", "Breakfast", "Describe me...", 200),
    new Meal("Lunch", "Whats for lunch...", "Describe me...", 600),
    new Meal("Dinner", "Before we sleep..", "Describe me...", 500),
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
