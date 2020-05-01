import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  data=[];
  info=[];
  postdata(obj){
    console.log(obj);
    return this.http.post('http://localhost/demo/addcustomer.php',obj,{responseType:'text'}).subscribe(data=>{
      console.log(data);
    })
  }
  getdata(){
    return this.http.get('http://localhost/demo/getcustomers.php',{responseType:'text'});
  }

  updatedata(c_obj){
    console.log(c_obj);
    let count=0;
    let keysobj=c_obj.days;
    let keys=Object.keys(keysobj);
    console.log(keysobj);
    for(let i=0;i<keys.length;i++){
      if(c_obj.days[keys[i]] != 0){
        count=count+Number(c_obj.days[keys[i]]);
      }
    }
    console.log(count);
    c_obj['milkconsumed']=count*c_obj['packetrate']; 
    if(c_obj['milkconsumed']>c_obj['total']){
      c_obj['status']="DUE";
      c_obj['dueorextra']=c_obj['milkconsumed']-c_obj['total'];
    }
    if(c_obj['milkconsumed']<c_obj['total']){
      c_obj['status']="EXTRA";
      c_obj['dueorextra']=c_obj['total']-c_obj['milkconsumed'];
    }
    if(c_obj['milkconsumed']==c_obj['total']){
      c_obj['status']="CLEAR";
      c_obj['dueorextra']=c_obj['total']-c_obj['milkconsumed'];
    }
    return this.http.put('http://localhost/demo/updatecustomer.php',c_obj,{responseType:'text'}).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err.message);
    }
    );
  }
  Custinfo(c_obj){
    let keysobj=c_obj.days;
    console.log(c_obj);
    let keys=Object.keys(keysobj);
    console.log(keysobj);
    for(let i=0;i<keys.length;i++){
      if(Number(c_obj.days[keys[i]]) > Number(c_obj['quantity'])){
        this.info[keys[i]]="Extra Taken";
      }
      if(Number(c_obj.days[keys[i]]) ==Number(c_obj['quantity'])){
        this.info[keys[i]]="Balanced";
      }
      if(Number(c_obj.days[keys[i]]) < Number(c_obj['quantity'])){
        this.info[keys[i]]="Taken Less";
      }
    }
    console.log(this.info);
    return this.info;
  }
  getinfo(){
    return this.info;
  }
}

