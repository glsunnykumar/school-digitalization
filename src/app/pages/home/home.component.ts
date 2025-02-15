import { Component } from '@angular/core';
import { MenubarComponent } from "../menubar/menubar.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [MenubarComponent,
    MatIconModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
