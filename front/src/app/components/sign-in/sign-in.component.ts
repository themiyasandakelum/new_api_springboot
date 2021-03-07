import {Component, OnInit} from '@angular/core';
import { UserService } from 'src/app/user.service';
import {User} from '../../models/user';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user: User = new User();
  router: any;

  constructor(private userService:UserService) {
  
  }

  ngOnInit(): void {
  }
  saveUser(){
  this.userService.signUpUser(this.user).subscribe(data =>{
   console.log(data); 
   console.log(this.user);
   this.goToUserList();
  },
  error =>console.log(error)
  );
}
goToUserList(){
  this.router.navigate(['/client']);
}
  onSubmit(): void {
    console.log(this.user);

    this.saveUser();  
  }
}
