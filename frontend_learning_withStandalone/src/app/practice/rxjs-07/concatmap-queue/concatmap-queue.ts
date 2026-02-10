/**
 * Sprint RxJS - concatMap
 * Use-case: Queue requests sequentially (order matters)
 * Behavior: No cancel, no parallel — runs 1-by-1 in the same order
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-concatmap-queue',
  imports: [],
  templateUrl: './concatmap-queue.html',
  styleUrl: './concatmap-queue.css',
})
export class ConcatmapQueue {
  
}
