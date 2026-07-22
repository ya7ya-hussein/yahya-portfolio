import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent {}