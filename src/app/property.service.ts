import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Property } from "./property.model"
import { Router } from "@angular/router";
import { map } from "rxjs";
@Injectable({
  providedIn:'root'
})
export class PropertyService{
  selectedProperty:Property | undefined;
  property:Property[]=[];
   baseURL= 'http://localhost:3000/property';


  constructor(private http:HttpClient,private router:Router){}

 addProperty(propertyName:string,propertyDescription:string,propertySize:string){
  console.log('service',propertyName);
  console.log(propertyDescription);

  // // const propertyData= new FormData();
  // propertyData.append("propertyName",propertyName);
  // propertyData.append("propertyDescription",propertyDescription);
  // propertyData.append("propertySize",propertySize);
const propertyData={propertyName:propertyName,propertyDescription:propertyDescription,propertySize:propertySize}
 console.log(propertyData);

  return this.http.post<Property>(this.baseURL,propertyData).subscribe((responseData)=>{
    console.log('response',responseData);
    this.router.navigate(["/"])
  });
 }

getProperty(){
  return this.http.get<{documents: any}>(this.baseURL).pipe(map(postData=>{
    return {documents: postData.documents.map((documents:any) =>{

      return{
        propertyName: documents.propertyName,
        propertyDescription: documents.propertyDescription,
        _id: documents._id,
        propertySize: documents.propertySize,

      };
    }),

  };
  }));
}

 getPropertyByID(id:string){

  const x= this.http.get<{_id:string,propertyName:string,propertyDescription:string,propertySize:string}>
  (this.baseURL+"/"+id);
  return x;
 }

 DeleteProperty(propId:string){
  console.log(propId);
  return this.http.delete(this.baseURL+"/"+propId);
 }
}
