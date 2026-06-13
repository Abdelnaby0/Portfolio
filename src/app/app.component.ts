import { Component } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  isLoading = true;
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.scrollToTop();
      }
    });
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  ngOnInit(): void {
    // Simulate page loading and smoothly hide loader after a delay
    setTimeout(() => {
      this.isLoading = false; // Trigger the fade-out effect
    }, 500); // Adjust the time based on actual load duration
  }
}


