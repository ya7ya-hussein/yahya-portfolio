import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio';
import { Publication } from '../../models/portfolio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publications.html',
  styleUrls: ['./publications.scss']
})
export class PublicationsComponent implements OnInit {
  publications: Publication[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.publications = this.portfolioService.getPublications();
  }
}
