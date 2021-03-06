import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AjudaRequest } from "src/app/models/ajudaRequest";
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root',
})

export class AjudaService{

    private readonly apiURL = environment.apiURL;
    private readonly routePost = '/help-offer';
    private readonly routeGet = '/help-offers';

    private header = {
        'Content-Type': 'application/json'
    };
      
    private options = {                                                                                                                                                                                 
        headers: new HttpHeaders(this.header), 
    };
      
    constructor(private http: HttpClient){
    }

    get(){
        return this.http.get(this.apiURL + this.routeGet)
    }

    create(ajuda: AjudaRequest){
        return this.http.post(this.apiURL + this.routePost, ajuda, this.options)
            .subscribe(
                (data) => {
                    console.log(data)
                },
                (error) => {
                    console.log(error)
                }
            )
    }

}