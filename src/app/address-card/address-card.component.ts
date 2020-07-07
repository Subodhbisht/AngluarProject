import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model'

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  @Input("user") user: User;
  isCollapsed: Boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleCollapsed(){
    this.isCollapsed = !this.isCollapsed;
  }
}
