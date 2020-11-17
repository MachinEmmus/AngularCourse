import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.sass']
})
export class PipesComponent implements OnInit {
  nickname: string = "MachinEmmus"
  coast: string = "4000000"
  constructor() { }

  ngOnInit(): void {
  }

}
