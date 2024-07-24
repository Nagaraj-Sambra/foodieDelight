import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncatePhone'
})
export class TruncatePhonePipe implements PipeTransform {

  transform(value: any): any {
    if (!value) {
      return '';
    }
    return value.substring(0, 10);
  }

}
