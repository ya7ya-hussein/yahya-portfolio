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
  articles: Article[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.articles = this.portfolioService.getArticles();
  }
}
