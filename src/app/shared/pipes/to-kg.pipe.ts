import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toKg'
})
export class ToKg implements PipeTransform {

  transform(value: any, args?: any): any {
    return this.formatNumber(value * 0.1);
  }

   formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

}
