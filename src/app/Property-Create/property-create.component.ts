import { Component,OnInit } from "@angular/core";
import { Property } from "../property.model";
import { FormsModule,FormGroup, FormControl } from "@angular/forms";
import { PropertyService } from "../property.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector:'app-property-create',
  templateUrl: './property-create.component.html',
  styleUrls: ['./property-create.component.css']
})
export class PropertyCreate implements OnInit{

  form: FormGroup=new FormGroup({});
  propertyName='ssss';
  propertyDescription='dddd';
  PropertySize:string='1';
  constructor(private propService:PropertyService,private route:Router){}


ngOnInit(){
  this.form =new FormGroup({
    propertyName: new FormControl(''),
    propertyDescription: new FormControl(''),
    propertySize: new FormControl('')
  });
}

createProperty(){

  if(this.form.invalid){
    return;
  }
  this.propService.addProperty(this.form.value.propertyName,this.form.value.propertyDescription,this.form.value.propertySize);

  this.route.navigate(["/"]);
}
}
