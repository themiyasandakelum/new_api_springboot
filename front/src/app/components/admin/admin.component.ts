import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user: User = new User();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.user);
  }
}
