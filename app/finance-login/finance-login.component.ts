import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-finance-login',
  templateUrl:'./finance-login.component.html',
  styles: [`

  `]
})
export class FinanceLoginComponent implements OnInit {
  title = "Finance";

  username: any;
  password: any;

  items: any[] = [];

  constructor(private r : Router, private d : MatDialog, private s : SharedServiceService) { }
  oF_D = () => {
    this.s.getFinance().subscribe(data =>{
      this.items = data;
      for(let i = 0; i < this.items.length; i++){
        if(this.items[i].Username === this.username)
        {
          if(this.items[i].Pass_word === this.password)
          {
            this.r.navigateByUrl("/finance-dashboard");
            this.kD_L()
          }
        }else{
          this.username = "";
          this.password = "";
        }
      }
    });
    console.log(this.items);
  }
  kD_L = () => {
    this.d.ngOnDestroy();
  }
  ngOnInit(): void {
  }

}
