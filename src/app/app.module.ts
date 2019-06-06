import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopicService } from './topic.service';
import { AddTopicComponent } from './add-topic/add-topic.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTopicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TopicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
