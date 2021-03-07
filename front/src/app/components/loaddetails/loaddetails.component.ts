import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loan } from 'src/app/models/loan';
import { LoanService } from 'src/app/loan.service';

@Component({
  selector: 'app-loaddetails',
  templateUrl: './loaddetails.component.html',
  styleUrls: ['./loaddetails.component.css']
})
export class LoaddetailsComponent implements OnInit {
  loan !: Loan[];

  constructor(private loanService:LoanService, private router:Router) { }

  ngOnInit(): void {
    this .getAllLoaddetails();
    
  }
  private getAllLoaddetails(){
    this.loanService.getAllLoaddetailsList().subscribe(data=>{
      this.loan=data;
    });
  }
  updateLoaddetails(id:number){
    this.router.navigate(['updateloaddetails',id]);
     
  }

}
