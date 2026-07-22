import { Component, computed, inject, signal } from '@angular/core';
import { PortfolioService } from '../../services/portfolio';
import { Article } from '../../models/portfolio';
import { FadeInDirective } from '../../directives/fade-in';

type Filter = 'All' | 'LinkedIn' | 'Medium';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './articles.html',
  styleUrls: ['./articles.scss']
})
export class ArticlesComponent {
  private readonly portfolio = inject(PortfolioService);

  protected readonly filters: Filter[] = ['All', 'LinkedIn', 'Medium'];
  protected readonly activeFilter = signal<Filter>('All');

  private readonly allArticles: Article[] = this.portfolio.getArticles();

  protected readonly visibleArticles = computed(() => {
    const filter = this.activeFilter();
    return filter === 'All'
      ? this.allArticles
      : this.allArticles.filter(article => article.platform === filter);
  });

  protected setFilter(filter: Filter): void {
    this.activeFilter.set(filter);
  }
}