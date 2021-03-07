import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  user: User = new User();
  router: any;

  constructor(private userService:UserService) {
  
  }

  ngOnInit(): void {
  }
  saveUser(){
  this.userService.signUpUser(this.user).subscribe(data =>{
   console.log(data); 
   
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

