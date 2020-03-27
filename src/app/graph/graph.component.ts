import { Component, OnInit } from '@angular/core';

import { Edge, Node, ClusterNode, Layout } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  chapter: number = 1;

  constructor() { }

  ngOnInit() {
  }

  onChapterSelect(event: any) {
    this.chapter = event.target.value;
  }

}
