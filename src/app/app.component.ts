import { AuthenticationService } from './login/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  showMenu : Boolean;

  constructor(private authenticationService : AuthenticationService) {
    this.showMenu = false;
  }

  ngOnInit() {
    this.authenticationService.showMenuEmitter
    .subscribe (
      show => this.showMenu = show
    );
  }
}