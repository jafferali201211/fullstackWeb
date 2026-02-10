import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-zoneless',
  imports: [],
  templateUrl: './zoneless.html',
  styleUrl: './zoneless.css',
})
export class Zoneless {
  
 count = signal(0);
  doubled = computed(() => this.count() * 2);

  delayedMessage = signal('Waiting...');

  constructor() {
    // In a zoneless world: writing to a SIGNAL triggers render.
    setTimeout(() => {
      this.delayedMessage.set('Timeout done! (updated via signal)');
    }, 1000);

    effect(() => {
      console.log('Effect: count =', this.count());
    });
  }

  increment() {
    this.count.update(v => v + 1);
  }
}
