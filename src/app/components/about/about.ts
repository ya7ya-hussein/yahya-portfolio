import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio';
import { Skill } from '../../models/portfolio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent implements OnInit {
  skills: Skill[] = [];
  portfolioService = new PortfolioService();

  constructor(private portfolioServiceInjected: PortfolioService) {}

  ngOnInit(): void {
    this.skills = this.portfolioServiceInjected.getSkills();
  }
}