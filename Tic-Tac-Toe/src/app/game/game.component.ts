import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  squares:any = []
  xIsNext = true;
  winner = '';
  counter = 0;
  isdraw= '';
  freshpage=true;


constructor(){}
  ngOnInit(): void {

  }

  newGame(){
    this.squares  = Array(9).fill(null);
    this.winner = '';
    this.isdraw= '';
    this.counter = 0;
    this.freshpage=false;
  }

  get player(){
    return this.xIsNext?'X':'o'
  }

  makeMove(idx:number){
    if(!this.squares[idx]){
      this.squares.splice(idx,1,this.xIsNext)
      this.xIsNext= !this.xIsNext;
      this.counter++;

    }
    this.winner = this.calculateWinner();
  }

  calculateWinner(){
    const lines= [
      []
    ]
  }

}


