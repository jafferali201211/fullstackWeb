import { Component,inject, OnInit ,signal} from '@angular/core';
import {Jsonplace, User}  from '../jsonplace'
import { CommonModule } from '@angular/common';
import { map, single, throttle ,catchError, of, retry, distinctUntilChanged, tap} from 'rxjs';
@Component({
  selector: 'app-json-comp',
  imports: [CommonModule],
  templateUrl: './json-comp.html',
  styleUrl: './json-comp.css',
})
export class JsonComp implements OnInit{
jsonApiCall =inject(Jsonplace);
jsonVal:any =[];
simpleval = signal('2')
loading: boolean=false;
username:any='';
email:any='';
fakeApiRes:any=[];
errorRes:any='';
asyncTest:any;
trackById:any;
ngOnInit(): void {
  this.jsonApiCall.getEmployeModels().subscribe((res)=>{
    console.log('res',res)
  });
  this.trackById = (_: number, p:any) => p.id;
  this.getFakeStoreProduct();
  this.asyncTest =this.jsonApiCall.getFakeStoreProducts()
  this.jsonApiCall.getUser()
.pipe(
  map((users)=> users.map(({username,email,address:{city}})=>({username:username,email:email,city:city})))
  ).
  subscribe(
  //   (val) =>{this.jsonVal=val
  //   // console.log(this.jsonVal)
  // }
  {
    // next:(val)=>({this.jsonApiCall=val}),
     next: (v) => {
      console.log("res",v)
      return this.jsonVal = v},
  }
);

//Fake store Api data retrieve


}
getFakeStoreProduct(){
  // this.jsonApiCall.getFakeStoreProducts().subscribe((res)=>{
  //   this.fakeApiRes =res;
  // })

  //Professional way to writing
  this.jsonApiCall.getFakeStoreProducts().pipe(
    // throttle(2)
    distinctUntilChanged(),
    retry(0),
    tap(()=>console.log('API CALL TRIGGERED')),
    map((res)=>Array.isArray(res)?res:[] ),
    catchError((err)=>err)
  ).subscribe({
    next:(res)=>{
      this.fakeApiRes = res;
    },
    error:(errorRes)=>{
      this.errorRes =of(errorRes);
      // let {status} =this.errorRes
      console.log('err',this.errorRes)
    }
  })
}


}
