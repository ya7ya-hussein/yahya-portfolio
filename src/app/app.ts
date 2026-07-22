import {
  AfterViewInit,
  Component,
  OnDestroy,
  inject,
  signal
} from '@angular/core';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { ProjectsComponent } from './components/projects/projects';
import { ArticlesComponent } from './components/articles/articles';
import { PublicationsComponent } from './components/publications/publications';
import { PortfolioService } from './services/portfolio';

interface NavItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ArticlesComponent,
    PublicationsComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements AfterViewInit, OnDestroy {
  private readonly portfolio = inject(PortfolioService);

  protected readonly personalInfo = this.portfolio.getPersonalInfo();
  protected readonly currentYear = new Date().getFullYear();
  protected readonly websiteLabel = this.personalInfo.website
    .replace(/^https?:\/\//, '')
    .replace(/\/$/, '');

  protected readonly navItems: NavItem[] = [
    { id: 'home',         label: 'Home' },
    { id: 'about',        label: 'About' },
    { id: 'projects',     label: 'Projects' },
    { id: 'articles',     label: 'Articles' },
    { id: 'publications', label: 'Publications' }
  ];

  protected readonly activeSection = signal<string>('home');

  private sections: HTMLElement[] = [];
  private frame = 0;

  ngAfterViewInit(): void {
    this.sections = this.navItems
      .map(item => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    window.addEventListener('scroll', this.scheduleUpdate, { passive: true });
    window.addEventListener('resize', this.scheduleUpdate, { passive: true });
    this.updateActiveSection();
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scheduleUpdate);
    window.removeEventListener('resize', this.scheduleUpdate);
    cancelAnimationFrame(this.frame);
  }

  /** Coalesces scroll bursts into at most one measurement per frame. */
  private readonly scheduleUpdate = (): void => {
    cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(() => this.updateActiveSection());
  };

  private updateActiveSection(): void {
    if (this.sections.length === 0) return;

    const trigger = 140;
    let active = this.sections[0].id;

    for (const section of this.sections) {
      if (section.getBoundingClientRect().top <= trigger) {
        active = section.id;
      }
    }

    // The final section can never reach the trigger line, so pin it at the bottom.
    const atBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2;

    if (atBottom) {
      active = this.sections[this.sections.length - 1].id;
    }

    this.activeSection.set(active);
  }
}