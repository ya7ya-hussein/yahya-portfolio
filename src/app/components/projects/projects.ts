import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioService } from '../../services/portfolio';
import { Project } from '../../models/portfolio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]> = new Observable();

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.projects$ = this.portfolioService.getProjects();
  }
}
