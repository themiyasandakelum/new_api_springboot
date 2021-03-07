import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  user: User = new User();
  dataService: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.user);
  }
  // loginhandle(){
  //   this.dataService.getConfig(this.name)
  //   .subcribe((data:config=>{
  //     console.log(data);
  //     this.harcodeAuthenticaionService.un=data.Username;
  //     this.harcodeAuthenticaionService.pw=data.password;
  //     this.harcodeAuthenticaionService.ut=data.Usertype;
  //   }
  //   );
  // }
}
