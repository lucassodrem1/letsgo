import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Feed } from '../../interfaces/Feed';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  writeForm = new FormGroup({
    username: new FormControl(''),
    feeling: new FormControl(''),
    text: new FormControl(''),
  });

  public feeds: Feed[] = [];

  constructor(private feedService: FeedService) {}

  ngOnInit(): void {
    this.getFeed();
  }

  getFeed() {
    this.feedService.getFeed().subscribe(feeds => {
      this.feeds = feeds.map((feed: any) => feed.payload.doc.data());
      this.feeds.sort((a: Feed, b: Feed) => b.time - a.time);
    });
  }

  onSubmit(data: any) {
    data.time = new Date().getTime();
    this.feedService.addText(data);
    this.writeForm.reset();
  }
}
