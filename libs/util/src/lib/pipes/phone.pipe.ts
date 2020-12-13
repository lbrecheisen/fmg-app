import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phone' })
export class PhonePipe implements PipeTransform {
  transform(value: number | string): any {
    return value.toString().replace(/\D/g, '');
  }
}
