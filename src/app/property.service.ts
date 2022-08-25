import { HttpClient, HttpHeaders,HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Property } from "./property.model"
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn:'root'
})
export class PropertyService{
 REST_API:string="http://localhost:8000/api";

}
