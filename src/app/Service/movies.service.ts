import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
//https://api.themoviedb.org/3/movie/popular?api_key=38e52bad77ebe70a2fa84bd0e6051118&language=en-US&page=${pageNumber}
  constructor(private http:HttpClient) { }
  getAllMovies(pageNumber=1):Observable<any>{
    console.log(pageNumber);
    let pageQuery=`?page=${pageNumber}`
    return this.http.get(`http://localhost:3000/movies`+pageQuery)
  }
  getSearchMovies(searchVal:string):Observable<any>{
    if(searchVal==''){
      return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=38e52bad77ebe70a2fa84bd0e6051118&language=en-US&page=1`)
    }else{
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=38e52bad77ebe70a2fa84bd0e6051118&language=en-US&page=1&query=${searchVal}`)
    }
  }
  getTVShows():Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=38e52bad77ebe70a2fa84bd0e6051118&language=en-US&page=1`)
  }

  getMovieById(movieId:string){
    return this.http.get(`http://localhost:3000/movies/${movieId}`)
  }

  addNewMovie(mtitle:string,path:string,content:string){
    let newMovie={
      title:mtitle,
      overView:content,
      imgPath:path
    }
    this.http.post(`http://localhost:3000/addMovie`,newMovie).subscribe()
  }
}