import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'
import { DataService } from '../data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  
  characterName : string = "";

  constructor(public router: Router, public datas: DataService) { }

  ngOnInit() {
    
  }

  ListPerso():void{
    this.router.navigate(['/list'])
  }

  DetailsPerso():void{
    this.router.navigate(['/details', this.characterName])
    console.log(this.characterName)
  }
  


}
