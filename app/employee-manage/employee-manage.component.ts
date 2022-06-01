import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee-manage',
  templateUrl: './employee-manage.component.html'
  ,
  styles: [`
  button{
    float: right;
  }
  `]
})
export class EmployeeManageComponent implements OnInit {

  items: any[] = [];
  itemsX: any[] = [];

  inputsReceFilds: any[] = [];
  inputsFinaFilds: any[] =[];

  max = 100000;
  min =1;

  Id_R : any;
  rece_Id: any;
  rece_FirstName: any;
  rece_LastName: any;
  rece_Gender: any;
  rece_PhoneNumber: any;
  rece_Country: any;
  rece_Address: any;
  rece_Email : any;
  rece_Date : any;
  rece_Date_: any;
  rece_Username : any;
  rece_Password : any;

  // Finaces filds

  Id_F : any;
  fina_Id: any;
  fina_FirstName: any;
  fina_LastName: any;
  fina_Gender: any;
  fina_PhoneNumber: any;
  fina_Country: any;
  fina_Address: any;
  fina_Email : any;
  fina_Date : any;
  fina_Date_: any;
  fina_Username : any;
  fina_Password : any;

  Id_F_ : any;


  constructor(private service: SharedServiceService, private _snackBar: MatSnackBar ) { }
  // Receptionist issues
  clearReceptionistInputFilds = () =>{
    this.Id_R = "";
    this.rece_Id = "";
    this.rece_FirstName = "";
    this.rece_LastName = "";
    this.rece_Gender = "";
    this.rece_PhoneNumber = "";
    this.rece_Country = "";
    this.rece_Address = "";
    this.rece_Email = "";
    this.rece_Date = "";
    this.rece_Date_ = "";
    this.rece_Username = "";
    this.rece_Password = "";
  }
  addReceptionist = () =>{
    var val = {
      Rece_ID : this.rece_Id,
      First_name: this.rece_FirstName,
      Last_name: this.rece_LastName,
      Gender: this.rece_Gender,
      Phone_number: this.rece_PhoneNumber,
      Country: this.rece_Country,
      Addresse: this.rece_Address,
      Email: this.rece_Email,
      DateOfJoing: this.rece_Date,
      Username: this.rece_Username,
      Pass_word: this.rece_Password
    }
    this.service.addReceptionist(val).subscribe(res =>{
      this.openSnackBar(res.toString(), "OK");
      this.getReceptionist();
      this.clearReceptionistInputFilds();
    });
  }
  updateReceptionist = () =>{
    var val = {
      Id : this.Id_R,
      Rece_ID : this.rece_Id,
      First_name: this.rece_FirstName,
      Last_name: this.rece_LastName,
      Gender: this.rece_Gender,
      Phone_number: this.rece_PhoneNumber,
      Country: this.rece_Country,
      Addresse: this.rece_Address,
      Email: this.rece_Email,
      DateOfJoing: this.rece_Date_,
      Username: this.rece_Username,
      Pass_word: this.rece_Password
    }
    this.service.updateReceptionist(val).subscribe(res =>{
      this.openSnackBar(res.toString(), "OK");
      this.getReceptionist();
      this.clearReceptionistInputFilds();
    });
  }
  deleteReceptionist = (item: any) =>{
    this.service.deleteReceptionist(item.Id).subscribe(res =>{
      this.openSnackBar(res.toString(), "OK");
      this.getReceptionist();
    });
  }
  fillReceptionistInputs = (a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, j: any, k: any, l: any) =>{
    this.Id_R = a;
    this.rece_Id = b;
    this.rece_FirstName = c;
    this.rece_LastName = d;
    this.rece_Gender = e;
    this.rece_PhoneNumber = f;
    this.rece_Country = g;
    this.rece_Address = h;
    this.rece_Email = i;
    this.rece_Date_ = j;
    this.rece_Username = k;
    this.rece_Password = l;
    this.service.getReceptionist().subscribe(data =>{
      this.inputsReceFilds = data;
      for(let i = 0; i < this.inputsReceFilds.length; i++)
      {
        this.inputsReceFilds[i].Id = a;
        this.inputsReceFilds[i].Rece_ID = b;
        this.inputsReceFilds[i].First_name = c;
        this.inputsReceFilds[i].Last_name = d;
        this.inputsReceFilds[i].Gender = e;
        this.inputsReceFilds[i].Phone_number = f;
        this.inputsReceFilds[i].Country = g;
        this.inputsReceFilds[i].Addresse = h;
        this.inputsReceFilds[i].Email = i;
        this.inputsReceFilds[i].DateOfJoing = j;
        this.inputsReceFilds[i].Username = k;
        this.inputsReceFilds[i].Pass_word = l;
      }
    });
  }

  getReceptionist = () =>{
    this.service.getReceptionist().subscribe(data =>{
      this.items = data;
    });
  }
  // Done with receptionist
  // Finace issues
  clearFinaceInputFilds = () =>{
    this.Id_F = "";
    this.fina_Id = "";
    this.fina_FirstName = "";
    this.fina_LastName = "";
    this.fina_Gender = "";
    this.fina_PhoneNumber = "";
    this.fina_Country = "";
    this.fina_Address = "";
    this.fina_Email = "";
    this.fina_Date = "";
    this.fina_Date_ = "";
    this.fina_Username = "";
    this.fina_Password = "";

    this.Id_F_ = "";

  }
  addFinance = () =>{
    var val = {
      Fina_ID : this.fina_Id,
      First_name: this.fina_FirstName,
      Last_name: this.fina_LastName,
      Gender: this.fina_Gender,
      Phone_number: this.fina_PhoneNumber,
      Country: this.fina_Country,
      Addresse: this.fina_Address,
      Email: this.fina_Email,
      DateOfJoing: this.fina_Date,
      Username: this.fina_Username,
      Pass_word: this.fina_Password
    }
    this.service.addFinance(val).subscribe(res =>{
      this.openSnackBar(res.toString(), "OK");
      this.getFinance();
      this.clearFinaceInputFilds();
    });
  }
  updateFinance = () =>{
    var val = {
      Id : this.Id_F_,
      Fina_ID : this.fina_Id,
      First_name: this.fina_FirstName,
      Last_name: this.fina_LastName,
      Gender: this.fina_Gender,
      Phone_number: this.fina_PhoneNumber,
      Country: this.fina_Country,
      Addresse: this.fina_Address,
      Email: this.fina_Email,
      DateOfJoing: this.fina_Date,
      Username: this.fina_Username,
      Pass_word: this.fina_Password
    }
    this.service.updateFinance(val).subscribe(res =>{
      this.openSnackBar(res.toString(), "OK");
      this.getFinance();
      this.clearFinaceInputFilds();
    });
  }
  getFinance = () =>{
    this.service.getFinance().subscribe(data =>{
      this.itemsX = data;
    });
  }
  deleteFinace = (item: any) =>{
    this.service.deleteFinance(item.Id).subscribe(res =>{
      this.openSnackBar(res.toString(), "OK");
      this.getFinance();
    });
  }
  fillFinanceInputs = (a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, j: any, k: any, l: any) =>{
    this.Id_F_ = a;
    this.fina_Id = b;
    this.fina_FirstName = c;
    this.fina_LastName = d;
    this.fina_Gender = e;
    this.fina_PhoneNumber = f;
    this.fina_Country = g;
    this.fina_Address = h;
    this.fina_Email = i;
    this.fina_Date = j;
    this.fina_Username = k;
    this.fina_Password = l;
    this.service.getFinance().subscribe(data =>{
      this.inputsFinaFilds = data;
      for(let i = 0; i < this.inputsFinaFilds.length; i++)
      {
        this.inputsFinaFilds[i].Id = a;
        this.inputsFinaFilds[i].Fina_ID = b;
        this.inputsFinaFilds[i].First_name = c;
        this.inputsFinaFilds[i].Last_name = d;
        this.inputsFinaFilds[i].Gender = e;
        this.inputsFinaFilds[i].Phone_number = f;
        this.inputsFinaFilds[i].Country = g;
        this.inputsFinaFilds[i].Addresse = h;
        this.inputsFinaFilds[i].Email = i;
        this.inputsFinaFilds[i].DateOfJoing = j;
        this.inputsFinaFilds[i].Username = k;
        this.inputsFinaFilds[i].Pass_word = l;
      }
    });
  }
  // End Finance issues
  openSnackBar(message: string, action: string){
    this._snackBar.open(message, action);
  }
  
  ngOnInit(): void {
    this.rece_Id = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.fina_Id = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.getReceptionist();
    this.getFinance()
  }

}
