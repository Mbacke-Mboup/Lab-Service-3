import { Injectable } from '@angular/core';
import { Character } from './models/character';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  characters : string[] = ["bebe","butters","clyde","craig","eric","kenny","kyle","nichole","stan","tolkien","wendy"];

  constructor(public http:HttpClient) { }

  async GetDetails(characterName:string):Promise<Character>{
    let x = await lastValueFrom(this.http.get<any>("https://spapi.dev/api/characters?search=" + characterName))
  let datas = x.data[0]

  return new Character(datas.name,datas.age,datas.occupation,datas.grade, datas.episodes.length)
  }
}
