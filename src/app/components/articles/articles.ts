import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio';
import { Article } from '../../models/portfolio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles.html',
  styleUrls: ['./articles.scss']
})
export class ArticlesComponent implements OnInit {
  allArticles: Article[] = [];
  filteredArticles: Article[] = [];
  activeFilter = 'All';
  filters = ['All', 'LinkedIn', 'Medium'];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.allArticles = this.portfolioService.getArticles();
    this.filteredArticles = this.allArticles;
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
    this.filteredArticles = filter === 'All'
      ? this.allArticles
      : this.allArticles.filter(a => a.platform === filter);
  }
}