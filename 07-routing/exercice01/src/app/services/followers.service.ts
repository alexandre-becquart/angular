import { DatasService } from './datas.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FollowersService extends DatasService {

  constructor(http: HttpClient) {
    super(http, 'http://localhost:3000/users')
  }
}
