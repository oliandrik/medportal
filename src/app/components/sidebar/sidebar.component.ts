import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  links: any[] = [];

  ngOnInit() {
    const urlSegments = this.route.snapshot.url;
    if (urlSegments.some((segment) => segment.path === 'doctors')) {
      this.links.push(
        { title: 'Головна сторінка', link: 'doctors/main' },
        { title: 'Профіль', link: 'doctors/profile' },
        { title: 'Пацієнти', link: 'doctors/patients' },
        { title: 'Графічні результати', link: 'doctors/charts' }
      );
    } else {
      this.links.push(
        { title: 'Головна сторінка', link: 'dashboard/main' },
        { title: 'Профіль', link: 'dashboard/profile' },
        { title: 'Графіки', link: 'dashboard/charts' }
      );
    }
  }

  logout() {
    this.router.navigate(['/signup']);
  }
}
