import { DatasService } from './datas.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends DatasService {

  //url = 'http://localhost:3000/posts'

  constructor(http: HttpClient) {
    super(http, 'http://localhost:3000/posts')
  }


}
