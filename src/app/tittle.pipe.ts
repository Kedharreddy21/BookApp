import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tittle'
})
export class TittlePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
