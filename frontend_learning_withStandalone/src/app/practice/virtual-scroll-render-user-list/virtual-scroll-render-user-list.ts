import { Component ,ChangeDetectionStrategy} from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { CommonModule, NgFor } from '@angular/common';
@Component({
  selector: 'app-virtual-scroll-render-user-list',
  imports: [
ScrollingModule, // ✅ THIS FIXES THE ERROR
    CommonModule
],
  templateUrl: './virtual-scroll-render-user-list.html',
  styleUrl: './virtual-scroll-render-user-list.css',
})
export class VirtualScrollRenderUserList {

users = Array.from({ length: 10000 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`
  }));

  trackById(_: number, item: any) {
    return item.id;
  }


}
