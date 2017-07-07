import { Pipe, PipeTransform} from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calorie-watch",
  pure: false
})

export class CalorieWatchPipe implements PipeTransform {
  transform(input: Meal[], desiredCalorie){
    var output: Meal[] = [];
    if(desiredCalorie === 'gains'){
      for (var i = 0; i < input.length; i++){
        if(input[i].calories > 500){
          output.push(input[i]);
        }
      }
    return output;
  } else if(desiredCalorie === 'loses') {
    for (var i = 0; i < input.length; i++){
      if(input[i].calories < 500){
        output.push(input[i]);
        }
      }
    return output;
  } else {
    return input;
  }
 }
}
