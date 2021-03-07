import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import {User} from '../../models/user' ;
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 
  user!: User[];

  constructor(private userService:UserService, private router:Router) { }
 
  ngOnInit(): void {
    this .getAllUser();
    
    
    }
    private getAllUser(){
      this.userService.getAllUserList().subscribe(data=>{
        this.user=data;
      });
    }
    updateUser(id:number){
      this.router.navigate(['updateuser',id]);
       
    }
    deleteUser(id:number){
      this.userService.deleteUser(id).subscribe(data =>{
        console.log(data);
        this.getAllUser();
      })
    }

  }


