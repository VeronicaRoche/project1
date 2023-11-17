import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email :string ="";
  pwd:string="";
  msg:string="";
  users :any[]=[];

  constructor(private apiservice :ApiService, private routes:Router){}

  redirectToHome()
  {
    this.routes.navigate(['/register']);
  }

  checklogin()
  {

    if(this.email !="" && this.pwd!=="")
    {
      this.apiservice.getUsers().subscribe(
        (data: any) =>
        {
          this.users=data;
          console.log(data);

          for(let user of this.users){
            console.log(user.email+user.pwd)
            if(user.email == this.email && user.pwd==this.pwd){
              this.msg="login successfull";
              sessionStorage.setItem('email',user.email)
              break;
            }
          }
          if(this.msg==""){
          this.msg="Invalid email and password";

          }
          
          }
      );
        }
        else{
          this.msg="Enter the values";
        }
           
    }
      }



