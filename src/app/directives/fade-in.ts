import { AfterViewInit, Directive, ElementRef, OnDestroy, inject } from '@angular/core';

/**
 * Reveals the host element once it scrolls into view.
 *
 * Each element registers its own observer in ngAfterViewInit, so there is no
 * global timing assumption about when content has rendered.
 */
@Directive({
  selector: '[appFadeIn]',
  standalone: true,
  host: { class: 'fade-in' }
})
export class FadeInDirective implements AfterViewInit, OnDestroy {
  private readonly host = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const el = this.host.nativeElement as HTMLElement;

    const noMotion =
      typeof matchMedia === 'function' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (noMotion || typeof IntersectionObserver === 'undefined') {
      el.classList.add('visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}