import { Component } from '@angular/core';
import { TopicService } from './topic.service';
import { Topic } from './topic.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  topicId: string;;
  topicName: string;
  topicDescription: string;

  constructor(private svc: TopicService) {

  }

  add() {
    var topic: Topic = new Topic(this.topicId, this.topicName, this.topicDescription);
    this.svc.add(topic);
  }

}
