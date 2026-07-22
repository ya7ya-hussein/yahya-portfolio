import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent {
  private readonly portfolio = inject(PortfolioService);
  protected readonly personalInfo = this.portfolio.getPersonalInfo();
}