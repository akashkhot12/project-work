import { Component } from '@angular/core';
import { CardService } from 'service/card.service';
import { card } from 'src/model/cards.model';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'subscription-card';
  loginBtnSpinner : boolean = false;
  card : card = {}
  taskArr: any;

  constructor(
    private cardService : CardService,
    ){}


  ngOnInit(): void {
this.getCard()
  }


  cardModel : card = {} ;

  request_payload : card = {}


  createTask(card : card) {
    this.cardService.createCard(card).pipe(finalize(()=>(this.loginBtnSpinner = false))).subscribe(data  => {
     this.ngOnInit()

   }, err => {
     alert('error!')
   })
 }

 addDetail(){
  this.request_payload = this.card_model;
  this.createTask(this.request_payload);
 }

 getCard() {
  this.cardService.getCard().subscribe((response:any) => {
    console.log(response);
    this.card = response ;

  }, err => {
    alert('Unable to get list')
  })
}


public get card_model(): card {
  return this.cardModel
}

public set card_model(value: card) {
  this.cardModel = value;
}
}
