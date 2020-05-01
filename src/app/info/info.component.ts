import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  infoOfCust=[];
  customerinfo={};
  keys=[];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.infoOfCust=this.dataService.getinfo();
    this.customerinfo=Object.assign({},this.infoOfCust);
    this.keys=Object.keys(this.customerinfo);
    console.log(this.customerinfo)
  }

}
