import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { MenubarComponent } from "../menubar/menubar.component";
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { register } from 'swiper/element-bundle';
import { FooterComponent } from "../footer/footer.component";
import { ApplicationFormComponent } from '../application-form/application-form.component';

@Component({
  selector: 'app-home',
  imports: [MenubarComponent,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    CommonModule,
     FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas :[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit{
  courses = [
    {
      name: 'Computer Science',
      description: 'Learn programming, AI, and web development.',
      image: '/assets/AI.png'
    },
    {
      name: 'All Stream (Non Med)',
      description: 'Arts Commerce and Science.',
      image: '/assets/AI.png'
    },
    {
      name: 'Graphic Design',
      description: 'Explore creativity with digital design tools.',
       image: '/assets/AI.png'
    },
    {
      name: 'CCE Enabled Evaluation',
      description: 'Overall deveoplment of the students by evaluating them periodically.',
       image: '/assets/AI.png'
    }
  ];

   // Top 5 team members
   topMembers = [
    { name: 'Nisha Kumari', role: 'Member', photo: 'assets/image.webp',designation :'Lect English' },
    { name: 'Rajesh Kumar', role: 'Member', photo: 'assets/image.webp' ,designation :'Lect History' },
    { name: 'Abodh Kumar', role: 'Member', photo: 'assets/image.webp',designation :'Lect Chemistry' },
    { name: 'Ranju Sharma', role: 'Member', photo: 'assets/image.webp',designation :'Lect Pol Science' },
    
  
  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    register();
  }

  openApplicationForm() {
    this.dialog.open(ApplicationFormComponent, {
      width: '500px',
    });
  }

}
