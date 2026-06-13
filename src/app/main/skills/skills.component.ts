import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  // Front-End Skills
  progressHtml = 0;
  progressCss = 0;
  progressJs = 0;
  progressBootstrap = 0;
  progressJquery = 0;
  progressTypescript = 0;
  progressReact = 0;
  progressAngular = 0;
  progressTailwind = 0;
  // Back-End Skills
  progressMySQL = 0;
  progressPHP = 0;
  progressLaravel = 0;


  constructor() {}

  ngOnInit(): void {
    // Front-End Animations
    this.animateProgress('html', 100);
    this.animateProgress('css', 100);
    this.animateProgress('js', 60);
    this.animateProgress('bootstrap', 90);
    this.animateProgress('tailwind', 70);
    this.animateProgress('jquery', 50);
    this.animateProgress('typescript', 70);
    this.animateProgress('react', 70);
    this.animateProgress('angular', 30);

    // Back-End Animations
    this.animateProgress('mysql', 80);
    this.animateProgress('php', 75);
    this.animateProgress('laravel', 70);
  }

  animateProgress(skill: string, targetValue: number): void {
    let currentProgress = 0;
    const interval = setInterval(() => {
      if (currentProgress >= targetValue) {
        clearInterval(interval); // Stop animation when the target value is reached
      } else {
        currentProgress++;
        switch (skill) {
          case 'html':
            this.progressHtml = currentProgress;
            break;
          case 'css':
            this.progressCss = currentProgress;
            break;
          case 'js':
            this.progressJs = currentProgress;
            break;
          case 'bootstrap':
            this.progressBootstrap = currentProgress;
            break;
          case 'tailwind':
            this.progressTailwind = currentProgress;
            break;
          case 'jquery':
            this.progressJquery = currentProgress;
            break;
          case 'typescript':
            this.progressTypescript = currentProgress;
            break;
          case 'react':
            this.progressReact = currentProgress;
            break;
          case 'angular':
            this.progressAngular = currentProgress;
            break;
          case 'mysql':
            this.progressMySQL = currentProgress;
            break;
          case 'php':
            this.progressPHP = currentProgress;
            break;
          case 'laravel':
            this.progressLaravel = currentProgress;
            break;
        }
      }
    }, 20); // Adjust animation speed as needed
  }
}
