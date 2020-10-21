import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoggedIn = false;

  constructor(private keycloakService: KeycloakService) { }

  onLogoutClick(): void {
    this.keycloakService.logout('http://localhost:4200');
  }

  ngOnInit(): void {
    this.keycloakService.isLoggedIn().then(v => {
      this.isLoggedIn = v;
    });
  }

}
