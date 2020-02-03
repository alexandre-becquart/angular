import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-followers-details',
  templateUrl: './followers-details.component.html',
  styleUrls: ['./followers-details.component.scss']
})
export class FollowersDetailsComponent implements OnInit {

  username: string;
  id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.paramMap
    //   .subscribe(params => {
    //     console.log(params);
    //     this.username = params.get('login')
    //     this.id = +params.get('id')
    //   })

    /* ------------------------------- equivalent ------------------------------- */
    /* -------------------------------------------------------------------------- */

    /* ------------- quand on est sur de passer par une autre route ------------- */

    this.username = this.route.snapshot.paramMap.get('login')
    this.id = +this.route.snapshot.paramMap.get('id')


    console.log('testing');
  }

}
