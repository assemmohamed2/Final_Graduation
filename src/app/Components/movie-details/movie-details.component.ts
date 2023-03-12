import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/Service/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  singleMovie:any;
  constructor(private moviesServ:MoviesService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get('id');
    this.moviesServ.getMovieById(id!).subscribe({next:(movie)=>{
      this.singleMovie=movie;
      console.log(movie);
      
    }})
  }




}
