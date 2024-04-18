import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mth',
  standalone: true,
})
export class MinutsToHours implements PipeTransform {
  transform(value?: string): string | undefined {
    if (value) {
      let value1 = parseInt(value);
      let hrs = Math.floor(value1 / 60);
      let mins = Math.floor(value1 % 60);
      return hrs + 'h ' + mins + 'm';
    }
    return value;
  }
}
