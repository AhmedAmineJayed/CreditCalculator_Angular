import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalComponent } from './capital/capital.component';
import { DureeComponent } from './duree/duree.component';
import { AnnuiteComponent } from './annuite/annuite.component';
import { CreditComponent } from './credit/credit.component';
import { TableComponent } from './table/table.component';
import { FormInputComponent } from './form-input/form-input.component';
import { NgApexchartsModule } from 'ng-apexcharts';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ApiService } from './services/api.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { InterceptorServiceService } from './services/interceptor-service.service';

import { HttpClientModule } from '@angular/common/http';

const appRoutes : Routes = [
  {path:'', component:CapitalComponent}, 
  {path:'capital', component:CapitalComponent}, 
  {path:'annuite', component:AnnuiteComponent}, 
  {path:'duree', component:DureeComponent}, 
  {path:'credit', component:CreditComponent}, 
  {path:'login', component:LoginComponent}, 
  {path:'register', component:RegisterComponent}, 
]

@NgModule({
  declarations: [
    AppComponent,
    CapitalComponent,
    DureeComponent,
    AnnuiteComponent,
    CreditComponent,
    TableComponent,
    FormInputComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    NgApexchartsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService,
  AuthGuardService,
  AuthService,
  InterceptorServiceService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
