import { Component } from '@angular/core';
import { MenubarComponent } from "../menubar/menubar.component";
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [MenubarComponent,
    MatIconModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  courses = [
    {
      name: 'Computer Science',
      description: 'Learn programming, AI, and web development.',
      image: '/assets/cs-course.jpg'
    },
    {
      name: 'All Stream (Non Med)',
      description: 'Arts Commerce and Science.',
      image: '/assets/business-course.jpg'
    },
    {
      name: 'Graphic Design',
      description: 'Explore creativity with digital design tools.',
      image: '/assets/design-course.jpg'
    }
  ];

}
