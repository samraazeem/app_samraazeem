import { Component } from '@angular/core';

export interface IDocuments {
  src: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carousel-demo';
  public slides: IDocuments[] = [
    {
      src:
        'https://images.pexels.com/photos/5901263/pexels-photo-5901263.jpeg?cs=srgb&dl=pexels-daniel-torobekov-5901263.jpg&fm=jpg',
      name:'ocean',
      description: 'water life',
    },
    {
      src:
        'https://images.pexels.com/photos/3854025/pexels-photo-3854025.jpeg?cs=srgb&dl=pexels-francesco-ungaro-3854025.jpg&fm=jpg',
      name: 'ocean',
      description: 'water life',
    },
    {
      src:
        'https://images.pexels.com/photos/4620471/pexels-photo-4620471.jpeg?cs=srgb&dl=pexels-francesco-ungaro-4620471.jpg&fm=jpg',
      name: 'ocean',
      description: 'water life',
    },
    {
      src: 
        'https://images.pexels.com/photos/4440745/pexels-photo-4440745.jpeg?cs=srgb&dl=pexels-wewe-yang-4440745.jpg&fm=jpg',
      name: 'ocean',
      description: 'water life'
    }
  ];
}
