import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPrefixPipe'
})
export class CurrencyPrefixPipePipe implements PipeTransform {

  transform(value: number, symbol: string): string {
    return `${symbol} ${value}`
  }

}
