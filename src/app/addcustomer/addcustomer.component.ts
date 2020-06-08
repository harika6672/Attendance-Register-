import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
   obj={id:'',name:'',brand:'',quantity:0,rate:0,days:{day1:0,day2:0,day3:0,day4:0,day5:0,
        day6:0,day7:0,day8:0,day9:0,day10:0,day11:0,day12:0,day13:0,day14:0,day15:0,
        day16:0,day17:0,day18:0,day19:0,day20:0,day21:0,day22:0,day23:0,day24:0,day25:0,
        day26:0,day27:0,day28:0,day29:0,day30:0,day31:0},total:0,milkconsumed:0,status:'',dueorextra:0}
  constructor(private dataService:DataService, private router:Router) { 

  }

  ngOnInit() {
    
  }

  submitdata(){
    this.obj.total=this.obj.quantity*this.obj.rate*31;
    console.log(this.obj);
    this.dataService.postdata(this.obj);
  }
  listofcustomers(){
    this.router.navigate(['/','attendance']);
  }

}
