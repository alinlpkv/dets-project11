import { Component, ViewChild, ElementRef } from '@angular/core';
import { Det } from './shared/models/det.model';
import { getLocaleFirstDayOfWeek } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project11';

  @ViewChild('idInput') idInput: ElementRef;
  @ViewChild('nameInput') nameInput: ElementRef;

  arrDet: Det[]=[ 
  new Det(1,  'first'),
  new Det(2,  'second'),
  new Det(3,  'third'),
  new Det(4,  'fourth'),
  new Det(5,  'fifth'),
  new Det(6,  'sixth'),
  new Det(7,  'seventh'),
  new Det(8,  'eighth'),
  new Det(9,  'ninth'),
  new Det(10,  'tenth'),
 ];
  
 deleteDet(index: number){
  this.arrDet.splice(index, 1);
 }
  
 getData(){
  this.addDet(this.idInput.nativeElement.value,this.nameInput.nativeElement.value);
}

 addDet(new_id: number, new_name: string){
   this.arrDet.splice(this.arrDet.length, 0,(new Det(new_id, `${new_name}`)));
 }


}
