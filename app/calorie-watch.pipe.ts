import { Pipe, PipeTransform} from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calorie-watch",
  pure: false
})

export class CalorieWatchPipe implements PipeTransform {
  transform(input: Meal[], desiredCalorie){
    var output: Meal[] = [];
    if(desiredCalorie < 500){
      for (var i = 0; i < input.length; i++){
        if(input[i].done === false){
          output.push(input[i]);
        }
      }
    return output;
  } else if(desiredCalorie > 500) {
    for (var i = 0; i < input.length; i++){
      if(input[i].done === true){
        output.push(input[i]);
        }
      }
    return output;
  } else {
    return input;
  }
 }
}
