import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-character',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 @Input() characterName ?: string;

 constructor(){

 }
}
