import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addmovis',
  templateUrl: './addmovis.component.html',
  styleUrls: ['./addmovis.component.scss']
})
export class AddmovisComponent implements OnInit {
  constructor(private movServise: MoviesService) {}

  ngOnInit(): void {}

  addMovie(formData: NgForm) {
    if (formData.invalid) {
      console.log('you must add value');
      return;
    }
    this.movServise.addNewMovie(
      formData.value.movieTitle,
      formData.value.moviePath,
      formData.value.movieoverView
    );
    formData.resetForm();
  }
}

