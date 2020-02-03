import { Component, OnInit, Input } from '@angular/core';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  faSortDown = faSortDown;
  faCaretLeft = faCaretLeft;

  @Input('title') title: string = "Mon Titre"

  isHidden = true;

  constructor() { }

  ngOnInit() {
  }

  hidden() {
    this.isHidden = !this.isHidden
  }

  hiddenNext() {
    const li = document.querySelector('li')

    if (li.classList.contains('hidden')) {
      li.classList.remove('hidden')
      li.classList.add('view')
      this.isHidden = !this.isHidden
    } else {
      li.classList.remove('view')
      li.classList.add('hidden')
      this.isHidden = !this.isHidden
    }

  }


}
