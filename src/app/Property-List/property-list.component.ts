import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

import { Property } from "../property.model";
import { PropertyService } from "../property.service";

@Component({
  selector:'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyList implements OnInit{
  @Input()  propertyName='';
  @Input()  propertyDescription='';
  @Input()  PropertySize:number=0;
  constructor(private route:Router,public service:PropertyService){}

   public dataSource={};
  displayedColumns: string[] = ['propertyName', 'propertyDescription', 'PropertySize','Delete'];

  Delete(propId:string){
    this.service.DeleteProperty(propId).subscribe(()=>{
      this.service.getPropertyByID(propId);
     })
     this.GetPropertyList();
  }

  ngOnInit(){
   this.GetPropertyList();
  }
GetPropertyList(){
  this.service.getProperty().subscribe((data)=>{
    console.log(data);
    this.service.property=data.documents as Property[];
    this.dataSource=this.service.property;
  });
}
}
