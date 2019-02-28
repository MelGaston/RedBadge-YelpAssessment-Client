import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import { Result } from '../models/result.model';
import { Search } from '../models/search.model';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})

export class SearchFormComponent implements OnInit {
  result:Result[];
  searches: Search[];

  constructor(private dbService: APIService) { }

  ngOnInit() {

  }

  onSearch(price:number, location:string) : void {
    event.preventDefault();
    let searchInfo =  new Search();
    searchInfo.price = price;
    searchInfo.location = location;

    console.log(searchInfo);

    this.dbService.getResults(searchInfo)
      .subscribe(Data => {
        this.result = Data.response;
        console.log(this.result);
      })
  }
}
