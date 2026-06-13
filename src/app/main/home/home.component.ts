import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    const selectors = document.querySelectorAll('.selector');


selectors.forEach((selector, index) => {
  selector.addEventListener('click', () => {
    // Remove 'active' class from all selectors
    selectors.forEach(sel => sel.classList.remove('active'));

    // Add 'active' class to the clicked selector
    selector.classList.add('active');
  });
});
  }
}
