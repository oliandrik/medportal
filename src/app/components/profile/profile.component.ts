import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  constructor(private route: ActivatedRoute, private location: Location) {}

  isDoctor: boolean = false;
  avatar: string = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
  lastname: string = this.isDoctor ? 'Крайник' : 'Давидова';
  firstname: string = this.isDoctor ? 'Назар' : 'Олеся';
  patronymic: string = this.isDoctor ? 'Ігорович' : 'Василівна';
  email: string = this.isDoctor ? 'email@gmail.com' : 'doctor@gmail.com';
  phone: string = this.isDoctor ? '+380658905432' : '+380738205042';
  doctor: string = 'Бондаренко І.Л.';
  city: string = 'Львів';
  street: string = this.isDoctor ? 'Луцького, 9' : 'Орельська, 35';
  isEditing: boolean = false;
  buttonStates: { [key: string]: boolean } = {
    button1: false,
  };

  ngOnInit() {
    const urlSegments: string[] = this.location.path().split('/');
    if (urlSegments.some((segment) => segment === 'doctors')) {
      this.isDoctor = true;
      console.log(this.isDoctor);
    }
  }

  toggleButtonText(buttonKey: string) {
    this.buttonStates[buttonKey] = !this.buttonStates[buttonKey];
    this.isEditing = !this.isEditing;
  }
}
