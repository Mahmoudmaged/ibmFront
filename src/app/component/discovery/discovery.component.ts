import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharityService } from 'src/app/services/charity.service';
declare var $: any;
@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.scss']
})
export class DiscoveryComponent implements OnInit {
  load: Boolean = false;
  noResult: Boolean = false;
  noResultMessage: any = ''
  result: Boolean = false;
  searchResult: any = [];
  constructor(private _CharityService: CharityService, public _Router: Router) {
  }

  ngOnInit(): void {

  }

  handelDiscovery() { 
    this.noResult = false
    this.load = true
    let Data = {
      data: {
        "text": "" + $('.inputData').val(),
        "model_id": "ar-en"
      }

    }
    this.searchResult =[]
    this._CharityService.discovery(Data).subscribe(data => {
      console.log(data);
      this.result = true
      if (data.message == "Done" && data.results.matching_results) {
        this.load = false;
        console.log(data);
        for (let index = 0; index < data.results.passages.length; index++) {
          this.searchResult.push(data.results.passages[index])
        }

        console.log(this.searchResult);
        
      } else {
        this.load = false;
        this.noResult = true;
      }
    })
  }


}
