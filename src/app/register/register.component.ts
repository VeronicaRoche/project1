import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name:String="";
  email:String="";
  phone:String="";
  pwd:String="";

  users : any[]=[];

  constructor(private apiservice: ApiService) {}

  registerUser()
  {
    if (this.name !="" && this.email!="" && this.phone!="" && this.pwd!="")
    {
      let users={
        username: this.name,
        email: this.email,
        phone: this.phone,
        pwd:this.pwd
      }
      this.apiservice.insertUser(users).subscribe((response)=>{console.log(response)});
    }
  }

}
