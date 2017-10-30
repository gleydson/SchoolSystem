import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';

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

  constructor(
    private authenticationService : AuthenticationService,
    private breadcrumbService: BreadcrumbService
  ) {
    this.showMenu = false;
  }

  ngOnInit() {
    this.breadcrumbService.hideRoute('/home');
    this.breadcrumbService.addFriendlyNameForRoute('/school-class', 'Turmas');
    this.breadcrumbService.addFriendlyNameForRoute('/school-class/new', 'Inserir nova turma');
    this.breadcrumbService.addFriendlyNameForRouteRegex('/school-class/[0-9]$', 'Detalhes');

    this.authenticationService.showMenuEmitter
    .subscribe (
      show => this.showMenu = show
    );
  }
}