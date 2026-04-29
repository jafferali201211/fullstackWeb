import { Component } from '@angular/core';
import { ChangeDetectionChild } from '../change-detection-child/change-detection-child';

@Component({
  selector: 'app-change-detection-parent',
  imports: [ChangeDetectionChild],
  templateUrl: './change-detection-parent.html',
  styleUrl: './change-detection-parent.css',
})
export class ChangeDetectionParent {
 user ={
  name:'Ali',
  city:'chennai'
 }
//Reference stays same
 changeName(){
  this.user.name="jaffer1"
 }

 //New reference
 replaceUser(){
  this.user= {...this.user,name:'jaffer'}
 }
}
