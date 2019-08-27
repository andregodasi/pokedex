import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toKg'
})
export class ToKg implements PipeTransform {

  transform(value: any, args?: any): any {
    return value * 0.1;
  }

}
