import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    /* ---------------------------------- AVANT --------------------------------- */

    //this.route.snapshot.queryParamMap.get('page')

    // this.route.queryParamMap
    //   .subscribe(params => {
    //     console.log(params);
    //   })
    // this.route.paramMap
    //   .subscribe(params => {
    //     console.log(params);
    //   })

    /* -------------------------------------------------------------------------- */

    /* ---------------------------------- APRES --------------------------------- */

    combineLatest([
      this.route.paramMap, // récupéré dans le router
      this.route.queryParamMap // récupéré dans l'url
    ])
      .subscribe(combine => {
        console.log(combine[0]); // dans ce cas ci n'affiche aucun paramètre pcq je n'ai pas de params dans ma route
        console.log(combine[1]); // affiche les paramètres du query passés dans l'url

      })
    /* -------------------------------------------------------------------------- */

  }

  followers = [
    { id: 1, img: 'https://picsum.photos/id/23/80/80', login: 'toto' },
    { id: 2, img: 'https://picsum.photos/id/34/80/80', login: 'tata' },
    { id: 3, img: 'https://picsum.photos/id/56/80/80', login: 'totyouplao' },
    { id: 4, img: 'https://picsum.photos/id/45/80/80', login: 'boum' },
    { id: 5, img: 'https://picsum.photos/id/106/80/80', login: 'tralala' },
    { id: 6, img: 'https://picsum.photos/id/87/80/80', login: 'hey' },
  ]

}
