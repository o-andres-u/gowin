import {Pipe, PipeTransform} from "angular2/core";

@Pipe({name: "test"})
export class TestPipe implements PipeTransform {

  transform(value, by): string {
    let byV = parseInt(by);
    let valueV = parseInt(value);
    let result = "Multiplication: " + value * byV;

    return result;
  }

}
