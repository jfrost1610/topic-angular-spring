import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic.service';
import { Topic } from '../topic.model';

@Component({
  selector: 'add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent implements OnInit {

  topicId: string;;
  topicName: string;
  topicDescription: string;
  topics: string;

  constructor(private svc: TopicService) {

  }

  ngOnInit() {
    this.svc.view((response: any) => {
      this.topics = response.body.topics;
      console.log("Topic Response", this.topics);
    });
  }

  add() {
    var topic: Topic = new Topic(this.topicId, this.topicName, this.topicDescription);
    this.svc.add(topic, () => {
      this.ngOnInit();
    });

  }

}
