import { Component, Input } from "@angular/core";
import { Property } from "../property.model";
import { ActivatedRoute, Router } from '@angular/router';
let  dummyData:Property[]=[{_id:1,propertyName:"xyz",propertyDescription:'2BHK',propertySize:'555sqFT'},
{_id:2,propertyName:"abc",propertyDescription:'2BHK',propertySize:"555"},
{_id:3,propertyName:"pqr",propertyDescription:'3BHK',propertySize:"325"},
{_id:4,propertyName:"dummy1",propertyDescription:'4BHK',propertySize:"445"}];
 export function AddProperty(property:Property){
  property._id=dummyData.length+1;
  dummyData.push(property);
}

function onDelete(id:number){
  let item:Property[]=[];
for(let i=0;i<dummyData.length;i++){

  if(dummyData[i]._id!==id){
    item.push(dummyData[i]);
  }
}
dummyData=item;
console.log(dummyData);

}
@Component({
  selector:'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyList{
  @Input()  propertyName='';
  @Input()  propertyDescription='';
  @Input()  PropertySize:number=0;
  constructor(private route:Router){}
  dataSource=dummyData;
  displayedColumns: string[] = ['propertyName', 'propertyDescription', 'PropertySize','Delete'];

Delete(id:number){
  onDelete(id);
  console.log("idddddddddd",id);
  console.log("idddddddddd",dummyData);
  this.refresh();
}

refresh(){
  this.dataSource=dummyData;
}
}
