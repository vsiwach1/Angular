import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl:'./app.component.html' ,
  styleUrls: ['./app.component.css','./details/details.component.css' ],
  imports:[HomeComponent, RouterModule]
})
export class AppComponent {
  title = 'homes';
}
