import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio';
import { Project } from '../../models/portfolio';
import { FadeInDirective } from '../../directives/fade-in';

interface ProjectView extends Project {
  paragraphs: string[];
  isVideo: boolean;
  hasMedia: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent {
  private readonly portfolio = inject(PortfolioService);

  /** Precomputed once so the template does no work during change detection. */
  protected readonly projects: ProjectView[] = this.portfolio
    .getFeaturedProjects()
    .map(project => ({
      ...project,
      paragraphs: project.description.split(/\n{2,}/).map(p => p.trim()).filter(Boolean),
      isVideo: /\.(mp4|webm)$/i.test(project.mediaUrl ?? ''),
      hasMedia: Boolean(project.mediaUrl)
    }));
}