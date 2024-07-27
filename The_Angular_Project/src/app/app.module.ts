// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { PersonListComponent } from './person-list/person-list.component';
// import { PersonFormComponent } from './person-form/person-form.component';
// import { PersonService } from './person.service';

// @NgModule({
//   declarations: [
//     AppComponent,
//     PersonListComponent,
//     PersonFormComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     HttpClientModule
//   ],
//   providers: [PersonService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonService } from './person.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
