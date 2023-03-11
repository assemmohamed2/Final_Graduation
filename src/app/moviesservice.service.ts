import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesserviceService {

 
 
 constructor(private http:HttpClient) { }
  getAllMovies(pageNumber=1):Observable<any>{
    console.log(pageNumber);
    let pageQuery=`?page=${pageNumber}`
    return this.http.get(`http://localhost:3000/movies`+pageQuery)
 
}
}