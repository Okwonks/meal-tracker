import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div class="col-md-3" *ngIf="childSelectedMeal">
  <h3>{{childSelectedMeal.type}}</h3>
    <div>
      <input [(ngModel)]="childSelectedMeal.meal" class="form-control">
    </div>
    <div>
      <input [(ngModel)]="childSelectedMeal.description" class="form-control">
    </div>
    <div>
      <input [(ngModel)]="childSelectedMeal.calories" class="form-control">
    </div>
    <br>
    <button class="btn btn-success btn-sm" (click)="doneClicked()">Done</button>
  </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal[];
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
