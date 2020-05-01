import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  data=[];
  keys=[];
  daysobj={};
  page = 1;
  pageSize =10;
  constructor(private router:Router,private dataService:DataService) { }
  
  ngOnInit() {
    this.dataService.getdata().subscribe(data=>{
      this.data=JSON.parse(data);
      console.log(this.data);
      this.daysobj=this.data[0].days;
      this.keys=Object.keys(this.daysobj);
      console.log(this.keys);
    })
  }
  updatecustomerdata(i){
    this.dataService.updatedata(this.data[i]);
  }
  info(i){
   this.dataService.Custinfo(this.data[i]);
   this.router.navigate(['/','info']);
  }
 
}
