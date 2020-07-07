import { Component } from '@angular/core';
import { User } from './address-card/user.model';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project';

  user: User;
  constructor(private service: TestService){
    this.user = new User();
    this.user.name="Subodh Bisht";
    this.user.designation="Software Developer";
    this.user.company="HCL";
    this.user.phone=["99990758281","7986155052","9719536354"]
    service.printToConsole("Got the service !")
  }
}
