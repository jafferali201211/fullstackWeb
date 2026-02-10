import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OnpushChild } from '../onpush-child/onpush-child';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-onpush-parent',
  imports: [OnpushChild,CommonModule],
  templateUrl: './onpush-parent.html',
  styleUrl: './onpush-parent.css',
})
export class OnpushParent {
  counter = 0;

  //Start with an Object (important for OnPush behavior)
  user = {name:'Ali'};

  private obsSubject = new BehaviorSubject<number>(0);
  obs$ = this.obsSubject.asObservable;
  constructor(private cdr : ChangeDetectorRef ,private zone:NgZone){}

 
  // 🔥 PROOF: logs whenever Parent is checked
  ngDoCheck(): void {
    console.log('%c[Parent Default] ngDoCheck fired', 'color:#2196f3');
  }

  incCounter() {
    this.counter++;
    // Primitive input changes => OnPush child will update (because @Input changes)
  }

  replaceUser() {
    this.user = { ...this.user, name: this.user.name + ' ✅' };
    // NEW reference => OnPush child updates
  }

  mutateUserName() {
    this.user.name = this.user.name + ' ❌';
    // Same object reference => OnPush child may NOT update
    // Parent template will update (Default), but child often won’t.
  }

  forceChildCheck() {
    // markForCheck: tells Angular this view needs checking in next CD run
    this.cdr.markForCheck();
  }

  outsideZoneMutation() {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.user.name = this.user.name + ' (outside zone)';
        console.log('%cUpdated user outside zone', 'color:orange');

        // Angular won't run CD automatically here.
        // If you want to update UI, you must enter zone or markForCheck/detectChanges.

        // Option A: re-enter Angular zone:
        // this.zone.run(() => this.user = { ...this.user });

        // Option B: force detection:
        this.zone.run(() => this.cdr.markForCheck());
      }, 1000);
    });
  }

  emitFromObservable() {
    this.obsSubject.next(this.obsSubject.value + 1);
    // async pipe triggers CD for consumers (works well with OnPush)
  }

}
