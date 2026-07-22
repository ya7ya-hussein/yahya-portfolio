import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio';
import { Publication } from '../../models/portfolio';
import { FadeInDirective } from '../../directives/fade-in';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './publications.html',
  styleUrls: ['./publications.scss']
})
export class PublicationsComponent {
  private readonly portfolio = inject(PortfolioService);

  /** Empty today — the template renders the placeholder card until the first paper. */
  protected readonly publications: Publication[] = this.portfolio.getPublications();
}