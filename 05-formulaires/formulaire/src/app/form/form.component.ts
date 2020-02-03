import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  categories = [
    {
      id: 1,
      name: "Dévelopement"
    },
    {
      id: 2,
      name: "Arts"
    },
    {
      id: 3,
      name: "Litérature"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  submit(f) {
    console.log(f);
  }

}
