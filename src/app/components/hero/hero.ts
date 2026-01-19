import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio';
import { PersonalInfo } from '../../models/portfolio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent implements OnInit {
  personalInfo: PersonalInfo = {} as PersonalInfo;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.personalInfo = this.portfolioService.getPersonalInfo();
  }

  scrollToProjects(): void {
    document.querySelector('#projects')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}