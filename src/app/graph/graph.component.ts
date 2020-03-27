import { Component, OnInit } from '@angular/core';

import { Edge, Node, ClusterNode, Layout } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  chapter: number = 1;
  layout: String | Layout = 'dagreCluster';

  constructor() { }

  ngOnInit() {
  }

  public getNodeStyles(node: Node): any {
    return {
      'visibility': +node.data.chapter <= this.chapter ? 'visible' : 'hidden'
    };
  }

  public getEdgeStyles(edge: Edge): any {
    return {
      'visibility': +edge.data.chapter <= this.chapter ? 'visible' : 'hidden'
    };
  }
}
