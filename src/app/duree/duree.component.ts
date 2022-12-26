import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from './../services/api.service'
import { AuthService } from './../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-duree',
  templateUrl: './duree.component.html',
  styleUrls: ['./duree.component.css']
})
export class DureeComponent implements OnInit {

  isLogin: boolean = false
  errorMessage: any
  username: any = {}
  dureeResult:any
  userData: any={}

  constructor(private _api: ApiService, 
    private _auth: AuthService, 
    private _router:Router) { }

  ngOnInit(): void {
    this.isUserLogin(); 
    console.log(this.isLogin)
  }

  onSubmit(form: NgForm) {
      console.log("This Username:" + this.username)
      this._api.postTypeRequest('credit/dureeSauv', form.value, this.username).subscribe((res: any) => {
          this.dureeResult = res
      });
    }
    
    isUserLogin(){
      this.userData = this._auth.getUserDetails()
      if( this.userData!= null){
          this.isLogin = true;
          // this.username = JSON.parse(this.userData).NomCli
          this.username = this._auth.getUsername()

      }
    }

}
