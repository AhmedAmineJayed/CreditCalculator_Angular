import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from './../services/api.service'
import { AuthService } from './../services/auth.service'
import { Router } from '@angular/router';

export interface PeriodicElement{
  NumCli: number;
  NumCre: number;
  DatCred: String;
  MonCre: number;
  DurCre: number;
  TauCre: number;
  AnnCred: number;
}

const ELEMENT_DATA : PeriodicElement[] = [
  {NumCli:1, NumCre: 1, DatCred: '2/2/2012', MonCre: 1.0079, DurCre: 10, TauCre:20,AnnCred:70},
  {NumCli:2, NumCre: 1, DatCred: '2/2/2012', MonCre: 1.0079, DurCre: 10, TauCre:20,AnnCred:70},
  {NumCli:2, NumCre: 1, DatCred: '2/2/2012', MonCre: 1.0079, DurCre: 10, TauCre:20,AnnCred:70},
  {NumCli:2, NumCre: 1, DatCred: '2/2/2012', MonCre: 1.0079, DurCre: 10, TauCre:20,AnnCred:70},
  {NumCli:2, NumCre: 1, DatCred: '2/2/2012', MonCre: 1.0079, DurCre: 10, TauCre:20,AnnCred:70},
  {NumCli:2, NumCre: 1, DatCred: '2/2/2012', MonCre: 1.0079, DurCre: 10, TauCre:20,AnnCred:70},
  {NumCli:2, NumCre: 1, DatCred: '2/2/2012', MonCre: 1.0079, DurCre: 10, TauCre:20,AnnCred:70},
  {NumCli:2, NumCre: 1, DatCred: '2/2/2012', MonCre: 1.0079, DurCre: 10, TauCre:20,AnnCred:70},
  {NumCli:2, NumCre: 1, DatCred: '2/2/2012', MonCre: 1.0079, DurCre: 10, TauCre:20,AnnCred:70},
  {NumCli:2, NumCre: 1, DatCred: '2/2/2012', MonCre: 1.0079, DurCre: 10, TauCre:20,AnnCred:70},
  {NumCli:2, NumCre: 1, DatCred: '2/2/2012', MonCre: 1.0079, DurCre: 10, TauCre:20,AnnCred:70},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{

  isLogin: boolean = false
  errorMessage: any
  username: any = {}
  data:PeriodicElement[] = []
  userData: any={}
  
  constructor(private _api: ApiService, 
    private _auth: AuthService, 
    private _router:Router) { }

  async ngOnInit(){
   this.isUserLogin();
   console.log(this.isLogin)
    this._api.postTypeRequest('client/table',{}, this.username).subscribe((res: any) => {
        // console.log(res.data)
        console.log(ELEMENT_DATA)
        this.data = res.data
        console.log(this.data)
    });

    // const result : any = await this._api.postTypeRequest('client/table', {}, this.username).toPromise()
    // this.data = result.data
    // console.log(result.data)

  }

  isUserLogin(){
      this.userData = this._auth.getUserDetails()
      if(this.userData != null){
          this.isLogin = true;
          this.username = this._auth.getUsername()
      }
    }

  // fetchData(username:any){
  //   this._api.postTypeRequest('client/table', username).subscribe((res: any) => {
  //     console.log("request sent", username.toString())
     
  //     if (res.status) { 
  //      console.log("Table result" ,res)
  //     }else{
  //       console.log("No result")
  //     }
  //   })

  // }

  displayedColumns : string[] = ['NumCli', 'NumCre', 'DatCred', 'MonCre', 'DurCre', 'TauCre', 'AnnCred'];
  dataSource = this.data;

}
