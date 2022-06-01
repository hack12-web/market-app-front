import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-reception-login',
  templateUrl: './reception-login.component.html'
  ,
  styles: [``]
})
export class ReceptionLoginComponent implements OnInit {
  title = "Reception"

  username : any;
  password : any;

  items: any[] = [];
  constructor(private route: Router, private dialog: MatDialog, private service: SharedServiceService ) { }

  openReceptionDash = () => {
    this.service.getReceptionist().subscribe(data =>{
      this.items = data;
      for(let i = 0; i < this.items.length; i++)
      {
        if(this.items[i].Username === this.username)
        {
          if(this.items[i].Pass_word === this.password)
          {
            this.route.navigateByUrl('/reception-dashboard');
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
    });
  }
  closeDialog = () => {
    this.dialog.ngOnDestroy();
  }

  ngOnInit(): void {}

}
