import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatasService } from './datas.service';

@Injectable({
  providedIn: 'root'
})
export class FollowersService extends DatasService {

  constructor(http: HttpClient) {
    super(http, 'https://api.github.com/users/octocat/followers')
  }
}
