import { Component, inject } from '@angular/core';
import { ShareReplayPostStateService } from './share-replay-post-state-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-di-04',
  imports: [CommonModule],
  templateUrl: './services-di-04.html',
  styleUrl: './services-di-04.css',
})
export class ServicesDi04 {
shareReplaypostStateService =inject(ShareReplayPostStateService)
posts$= this.shareReplaypostStateService.posts$;
}
