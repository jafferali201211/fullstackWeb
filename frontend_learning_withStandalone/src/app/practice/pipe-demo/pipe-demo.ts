import { Component } from '@angular/core';
import { CurrencyPrefixPipePipe } from './currency-prefix-pipe-pipe';

@Component({
  selector: 'app-pipe-demo',
  imports: [CurrencyPrefixPipePipe],
  templateUrl: './pipe-demo.html',
  styleUrl: './pipe-demo.css',
})
export class PipeDemo {
  price=500;
  text="welcome";
}
