import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  imageSrc: string =
    'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg';
}
