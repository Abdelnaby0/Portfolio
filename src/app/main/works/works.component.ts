import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {
  ngAfterViewInit(): void {
  const cards = document.querySelectorAll<HTMLElement>('.card');
  cards.forEach((card: HTMLElement, i: number) => {
    card.style.animationDelay = `${i * 0.2}s`;
  });
}
}
