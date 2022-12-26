import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from './../services/api.service'
import { AuthService } from './../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent implements OnInit {

  isLogin: boolean = false
  errorMessage: any
  username: any = {}
  capitalResult:any
  userData: any={}

  constructor(private _api: ApiService, 
    private _auth: AuthService, 
    private _router:Router) { }

  ngOnInit(): void {
    this.isUserLogin(); 
    console.log(this.isLogin)
  }

  onSubmit(form: NgForm) {
      this._api.postTypeRequest('credit/capitalSauv', form.value, this.username).subscribe((res: any) => {
          this.capitalResult = res
      });
    }
    
    isUserLogin(){
      this.userData = this._auth.getUserDetails()  
      if(this.userData != null){
          this.isLogin = true;
          this.username = this._auth.getUsername()
      }
    }

}
