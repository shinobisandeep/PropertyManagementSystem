import { Component,OnInit } from "@angular/core";
import { Property } from "../property.model";
import { FormsModule,FormGroup, FormControl } from "@angular/forms";
import { PropertyService } from "../property.service";
import { ActivatedRoute, Router } from '@angular/router';
import { AddProperty } from "../Property-List/property-list.component";
@Component({
  selector:'app-property-create',
  templateUrl: './property-create.component.html',
  styleUrls: ['./property-create.component.css']
})
export class PropertyCreate implements OnInit{

  form: FormGroup=new FormGroup({});
  propertyName='ssss';
  propertyDescription='dddd';
  PropertySize:number=1;
  constructor(private propService:PropertyService,private route:Router){}
  // addProperty(){
  //   // this.propService.addProperty(this.item);
  //   window.alert('New Property has been created');
  // }

  createProperty(){
    let properties={_id:0,propertyName:this.form.value.propertyName,propertyDescription:this.form.value.propertyDescription,propertySize:this.form.value.propertySize}
    console.log(properties);
    AddProperty(properties);
    console.log("nnn",properties);
    this.route.navigate(["/"]);
  }
ngOnInit(){
  this.form =new FormGroup({
    propertyName: new FormControl(''),
    propertyDescription: new FormControl(''),
    propertySize: new FormControl('')
  });
}
}
