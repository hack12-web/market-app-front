import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styles: [`

  `]
})
export class AdminLoginComponent implements OnInit {
  title = "Admin";

  isLoading: boolean = false;

  username: any;
  password: any;
  
  items: any[] = [];

  constructor(private router: Router, private dialog: MatDialog, private service: SharedServiceService) { }

  openAdminDashboard = () =>{
    return this.service.getAdmin().subscribe(data =>{
      this.items = data;
      for(var i = 0; i < this.items.length; i++){
        if(this.items[i].username === this.username)
        {
          if(this.items[i].pass_word === this.password){
            this.router.navigateByUrl("/admin-dashboard");
            this.closeDialog();
          }
          else{
            this.username = "";
            this.password = "";
          }
        }
        else{
          this.username = "";
          this.password = "";
        }
      }
    })
   
  }
  closeDialog = () => {
    this.dialog.ngOnDestroy();
  }


  ngOnInit(): void {
    //this.openAdminDashboard();
  }

}
