import { 
AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  Renderer2,
  ViewChild, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Import jQuery types & object
// import * as $ from 'jquery';

import $ from 'jquery';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
// export class App {
//   protected readonly title = signal('jqueryAng');
// }

export class App implements AfterViewInit, OnDestroy {
  @ViewChild('welcomeRef')  welcomeRef!:ElementRef<HTMLElement>;
  @ViewChild('titleRef', { static: true }) titleRef!: ElementRef<HTMLElement>;
  @ViewChild('boxRef',   { static: true }) boxRef!: ElementRef<HTMLElement>;
  @ViewChild('nameRef',  { static: true }) nameRef!: ElementRef<HTMLInputElement>;

  // Keep handler references to unbind later (avoid memory leaks)
  private nameHandler?: (this: HTMLElement, ev: Event) => any;
  private toggleHandler?: (this: HTMLElement, ev: Event) => any;
  private loadHandler?: (this: HTMLElement, ev: Event) => any;

  constructor(private renderer: Renderer2, private zone: NgZone) {}

  // Run jQuery code ONLY AFTER the view is rendered (DOM exists)
  ngAfterViewInit(): void {

    $(this.welcomeRef.nativeElement).text('welcome to jquery angular').addClass('active')
    // 1) Manipulate title using jQuery
    $(this.titleRef.nativeElement)
      .text('Angular + jQuery Demo (use only if required)')
      .addClass('active');

    // 2) Input events: Update box text on keyup/change
    this.nameHandler = () => {
      const value = $(this.nameRef.nativeElement).val() as string;
      $(this.boxRef.nativeElement).text(`Hello, ${value || 'Guest'}`);
    };
    $(this.nameRef.nativeElement).on('keyup change', this.nameHandler);

    // 3) Toggle box visibility using jQuery
    this.toggleHandler = () => {
      $(this.boxRef.nativeElement).toggle();
    };
    $('#btnToggle').on('click', this.toggleHandler);

    // 4) jQuery AJAX: load users and update DOM
    this.loadHandler = () => {
      $.get('https://jsonplaceholder.typicode.com/users', (data: any[]) => {
        // Wrap in zone.run so Angular is aware of DOM changes if needed
        this.zone.run(() => {
          const items = data
            .slice(0, 5)
            .map(u => `<li>${u.name} — ${u.email}</li>`)
            .join('');
          $('#users').html(items);
        });
      });
    };
    $('#btnLoad').on('click', this.loadHandler);
  }

  // Always unbind jQuery events to prevent memory leaks
  ngOnDestroy(): void {
    // if (this.nameHandler)   $(this.nameRef.nativeElement).off('keyup change', this.nameHandler);
    // if (this.toggleHandler) $('#btnToggle').off('click', this.toggleHandler);
    // if (this.loadHandler)   $('#btnLoad').off('click', this.loadHandler);
  }
}

