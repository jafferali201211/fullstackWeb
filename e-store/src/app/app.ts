import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('e-store');
  http =inject(HttpClient);
  ngOnInit() {
  // this.http.post('http://localhost:3000/ask', {
  //   prompt: "What is the capital of France?"
  // }).subscribe({
  //   next: (res: any) => {
  //     console.log("✅ Response:", res.reply);
  //   },
  //   error: (err) => {
  //     console.error("❌ Full Error:", err);

  //     if (err.status === 500) {
  //       console.log("🚨 Backend error:", err.error);
  //     }

  //     if (err.status === 401) {
  //       console.log("🔴 API Key issue (invalid key)");
  //     }
  //   }
  // });
}

  
}
