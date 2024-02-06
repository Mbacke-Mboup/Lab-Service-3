import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';

import{ActivatedRoute} from '@angular/router'
import { DataService } from '../data.service';




@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
characterName : string | null = null ;
characterDetails : Character | null = null;
constructor(public route:ActivatedRoute, public datas: DataService){}

async ngOnInit():Promise<void>{
  this.characterName = this.route.snapshot.paramMap.get("characterName")
  if(!this.characterName){
    this.characterName = "kenny"
  }
  this.characterDetails = await this.datas.GetDetails(this.characterName);
  
}
}
