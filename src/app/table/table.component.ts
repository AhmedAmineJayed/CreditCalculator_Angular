import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from './../services/api.service'
import { AuthService } from './../services/auth.service'
import { Router } from '@angular/router';

export interface PeriodicElement{
  NumCli: number;
  NumCre: number;
  DateCred: String;
  MontCred: number;
  DureeCred: number;
  TauxCred: number;
  AnnCred: number;
}

const ELEMENT_DATA : PeriodicElement[] = [
  {NumCli:1, NumCre: 1, DateCred: '2/2/2012', MontCred: 1.0079, DureeCred: 10, TauxCred:20,AnnCred:70},
  {NumCli:2, NumCre: 1, DateCred: '2/2/2012', MontCred: 1.0079, DureeCred: 10, TauxCred:20,AnnCred:70},
  {NumCli:2, NumCre: 1, DateCred: '2/2/2012', MontCred: 1.0079, DureeCred: 10, TauxCred:20,AnnCred:70},
  {NumCli:2, NumCre: 1, DateCred: '2/2/2012', MontCred: 1.0079, DureeCred: 10, TauxCred:20,AnnCred:70},
  {NumCli:2, NumCre: 1, DateCred: '2/2/2012', MontCred: 1.0079, DureeCred: 10, TauxCred:20,AnnCred:70},
  {NumCli:2, NumCre: 1, DateCred: '2/2/2012', MontCred: 1.0079, DureeCred: 10, TauxCred:20,AnnCred:70},
  {NumCli:2, NumCre: 1, DateCred: '2/2/2012', MontCred: 1.0079, DureeCred: 10, TauxCred:20,AnnCred:70},
  {NumCli:2, NumCre: 1, DateCred: '2/2/2012', MontCred: 1.0079, DureeCred: 10, TauxCred:20,AnnCred:70},
  {NumCli:2, NumCre: 1, DateCred: '2/2/2012', MontCred: 1.0079, DureeCred: 10, TauxCred:20,AnnCred:70},
  {NumCli:2, NumCre: 1, DateCred: '2/2/2012', MontCred: 1.0079, DureeCred: 10, TauxCred:20,AnnCred:70},
  {NumCli:2, NumCre: 1, DateCred: '2/2/2012', MontCred: 1.0079, DureeCred: 10, TauxCred:20,AnnCred:70},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{

  constructor(private _api: ApiService, 
    private _auth: AuthService, 
    private _router:Router) { }

  ngOnInit(): void{
    this.fetchData(localStorage.getItem("username"))
  }

  fetchData(username:any){
    this._api.postTypeRequest('user/table', username).subscribe((res: any) => {
      console.log("request sent", username.toString())
     
      if (res.status) { 
       console.log("Table result" ,res)
      }else{
        console.log("No result")
      }
    })

  }

  displayedColumns : string[] = ['NumCli', 'NumCre', 'DateCred', 'MontCred', 'DureeCred', 'TauxCred', 'AnnCred'];
  dataSource = ELEMENT_DATA;

}
