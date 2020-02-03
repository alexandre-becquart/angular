import { FollowersService } from './../services/followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vignette',
  templateUrl: './vignette.component.html',
  styleUrls: ['./vignette.component.scss']
})
export class VignetteComponent implements OnInit {

  followers

  constructor(private service: FollowersService) { }

  ngOnInit() {
    this.getFollowers()
  }

  getFollowers() {
    this.service.getAll()
      .subscribe(
        response => {
          console.log(response);
          this.followers = response;
          this.followers.reverse();
        }
      )
  }

}
