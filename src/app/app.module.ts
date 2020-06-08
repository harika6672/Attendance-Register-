import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { AttendanceComponent } from './attendance/attendance.component';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    AppComponent,
    AddcustomerComponent,
    AttendanceComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
