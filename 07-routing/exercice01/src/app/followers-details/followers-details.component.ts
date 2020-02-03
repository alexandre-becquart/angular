import { FollowersService } from './../services/followers.service';
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
  follower;
  img;
  name;


  constructor(private route: ActivatedRoute, private service: FollowersService) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('login')
    this.id = +this.route.snapshot.paramMap.get('id')
    this.getFollower()
  }

  getFollower() {
    this.service.getOne(this.id)
      .subscribe(
        response => {
          //console.log(response);
          this.follower = response;
          this.name = this.follower.login
          this.img = this.follower.avatar_url

        }
      )
  }




}
