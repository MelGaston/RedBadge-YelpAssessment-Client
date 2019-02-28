import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  public _result = {};

  ngOnInit() {
  }

  @Input() set result(result:any) {
    this._result = result;
    console.log(this._result);
  }

  get result(): any {
    return this._result;
  }
}
