import { FollowersService } from './../services/followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
  followers;

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
        })
  }

}
