import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-movierating',
  templateUrl: './movierating.component.html',
  styleUrls: ['./movierating.component.css']
})
export class MovieratingComponent implements OnInit ,OnChanges{
  @Input()
  rating!: number;
  clipWidth:number=75;
  @Output() messagefromChiled:EventEmitter<string>=new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges( ): void {
    this.clipWidth=this.rating*75/5;
  }

  onClick(){ 
    this.messagefromChiled.emit(`from chiled with rating ${this.rating}`);
  }

}