import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../services/followers.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  followers

  constructor(private service: FollowersService) { }

  ngOnInit() {
    this.getFollowers()
  }

  getFollowers() {
    this.service.getAll()
      .subscribe(
        response => {
          //console.log(response);
          this.followers = response;
          this.followers.reverse();
        }
      )
  }

}
