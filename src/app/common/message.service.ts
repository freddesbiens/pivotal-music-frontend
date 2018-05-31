import { EventEmitter, Injectable } from '@angular/core';
import { Subject  } from "rxjs";

@Injectable()
export class MessageService {
  
  public newMessage = new Subject<number>();
  public messages: string[] = [];

  constructor(){
  }


  add(message: string) {
    this.messages.push(message);
    this.newMessage.next(this.messages.entries.length);
  }

  clear() {
    this.messages = [];
  }
}