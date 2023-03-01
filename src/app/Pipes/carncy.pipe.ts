import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carncy'
})
export class CarncyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
