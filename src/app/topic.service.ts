import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { Topic } from './topic.model';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  BASEURL: string = 'http://ec2-13-127-89-182.ap-south-1.compute.amazonaws.com:8081/';

  constructor(private http: HttpClient) {

  }

  add(topic: Topic, cb: () => any) {
    console.log("Posting this new topic :: ", topic);
    this.http.post(this.BASEURL + 'topics', topic, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          console.log("New Topic added successfully!");
          cb();
        }
      })

  }

  view(cb: (response: any) => any) {
    this.http.get(this.BASEURL + 'topics', { observe: 'response' })
      .subscribe((response) => {
        console.log("View Response", response);
        cb(response);
      })
  }
}

