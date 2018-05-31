import { Component, OnInit } from '@angular/core';

import { MessageService  } from "../common/message.service";

@Component({
  selector: 'app-messagelist',
  templateUrl: './messagelist.component.html',
  styleUrls: ['./messagelist.component.scss']
})
export class MessageListComponent implements OnInit {

  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

  clear(){
    this.messageService.clear();
  }
}
