import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router, private location: Location) {}
  isDoctor: boolean = false;
  link: string = '';

  ngOnInit() {
    // this.link = this.isDoctor ? '/doctors/test-list' : '/dashboard/test-list';
    this.link = this.isDoctor ? '/dashboard/test-list' : '/doctors/test-list';
  }

  redirect() {
    this.router.navigate([this.link]);
  }
}
