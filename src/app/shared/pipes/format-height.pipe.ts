import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatHeight'
})
export class FormatHeight implements PipeTransform {

  transform(value: any, args?: any): any {
    const cm = value * 10;
    if (cm >= 100) {
      return (cm * 0.01).toLocaleString('us', { minimumFractionDigits: 2 }) + 'm';
    } else {
      return cm + 'cm';
    }
  }

}
