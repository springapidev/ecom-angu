import { Component } from '@angular/core';

@Component({
  selector: 'app-public-my-account',
  templateUrl: './public-my-account.component.html',
  styleUrls: ['./public-my-account.component.css']
})
export class PublicMyAccountComponent {
  isRegistrationDivVisible = true;
  buttonText = 'ACCEDER';

  toggleDivs() {
    this.isRegistrationDivVisible = !this.isRegistrationDivVisible;
    this.buttonText = this.isRegistrationDivVisible ? 'ACCEDER' : 'REGISTRARSE';
  }
}
