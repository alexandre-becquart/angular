import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submit(f) {
    console.log(f);
  }

  contactMethods = [
    { id: 1, value: "p", name: "phone" },
    { id: 2, value: "m", name: "mail" },
    { id: 3, value: "s", name: "sms" },
  ]


}
