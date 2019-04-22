import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient , HttpResponse} from "@angular/common/http";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AppService {
    constructor( private http:HttpClient ){}

    public backAcess(url:string){
      // return this.http.get(url);

return this.http.get('/api/items')
.subscribe(data => {   // data is already a JSON object
    console.log(data['someProperty']);
});

         }
}