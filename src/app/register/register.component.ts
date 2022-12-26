import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from './../services/api.service'
import { AuthService } from './../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLogin: boolean = false
  errorMessage: any
  username: String = ""

  constructor(private _api: ApiService, 
    private _auth: AuthService, 
    private _router:Router) { }

  ngOnInit(): void {
    this.isUserLogin(); 
  }

  onSubmit(form: NgForm) {
      this._api.postTypeRequest('client/register', form.value).subscribe((res: any) => {
        if (res.status) { 
          console.log(res)
          this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));  
          this._auth.setDataInLocalStorage('username', JSON.stringify(this.username));  
          this._auth.setDataInLocalStorage('token', res.token);  
          this._router.navigate(['login']);
        } else { 
          console.log(res)
          alert("User Already exists")
        }
      });
    }
    
    isUserLogin(){
      
      if(this._auth.getUserDetails() != null){
          this.isLogin = true;
      }
    }

}
