import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    MatToolbarModule, 
    MatIconModule,
    MatSidenavModule,
    ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  showFiller = false;
  sidebarOpen = true;
  hostUrl = environment.hostUrl
  protected title = 'creditcardadmin';

  sidebarToggle(){
    this.sidebarOpen = !this.sidebarOpen;
  }
}
