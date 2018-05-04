import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class MessageService {
  public messageAdded$: EventEmitter<string>;
  
  messages: string[] = [];

  constructor(){
    this.messageAdded$ = new EventEmitter();
  }


  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}