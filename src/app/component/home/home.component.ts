import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CharityService } from 'src/app/services/charity.service';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _CharityService: CharityService, public _Router: Router) {
  }
 
  ngOnInit(): void {
 
  }
 
  handelDiscovery() {
    console.log("hi");
    
    let Data = {
      data: {
        "text":"مستشفى 57357",
        "model_id":"ar-en"
      }

    }

    this._CharityService.discovery(Data).subscribe(data => {
      console.log(data.message);

      if (data.message == "Done") {
        console.log(data);
        
      }
    })
  }



}
