import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FormsModule,
  ReactiveFormsModule,
  } from "@angular/forms";

// material imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

// prime-ng imports
import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyAppLoginComponent } from './Components/my-app-login/my-app-login.component';
import { MyAppPageNotFoundComponent } from './Components/my-app-page-not-found/my-app-page-not-found.component';


const appRoutes: Routes = [
  { path: 'login', component: MyAppLoginComponent },
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: '**', component: MyAppPageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MyAppLoginComponent,
    MyAppPageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    TabViewModule ,
    CardModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
    // other imports here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
