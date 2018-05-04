import { Component } from '@angular/core';

import { MatDialog } from '@angular/material';

import { MessageService } from "./message.service";
import { MessageListComponent } from "./messagelist/messagelist.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Music';

  constructor(public dialog: MatDialog, messageService: MessageService) {
    messageService.messageAdded$.subscribe(() => this.onMessageAdded())
  }

  private onMessageAdded() {
    let dialogRef = this.dialog.open(MessageListComponent);
  }
}
