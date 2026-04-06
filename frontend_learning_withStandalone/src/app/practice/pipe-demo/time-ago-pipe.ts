import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  pure: false   // ⬅ VERY IMPORTANT
})
export class TimeAgoPipe implements PipeTransform {

  transform(date: Date ): string {
    const diff= Date.now() - date.getTime();
    return Math.floor(diff/6000)+'min ago';
  }

}
