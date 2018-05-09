import { Component } from '@angular/core';
import { PLATFORM_ID, APP_ID, Inject, Injector } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { MatDialog } from '@angular/material';

import { MessageService } from "./message.service";
import { MessageListComponent } from "./messagelist/messagelist.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string  = 'Music';
  hostname: string;

  constructor(public dialog: MatDialog, messageService: MessageService,
    @Inject(PLATFORM_ID) private platformId: Object,
     private injector: Injector) {

    if (!isPlatformBrowser(platformId)) {
      this.hostname = this.injector.get('host');
    }
    messageService.messageAdded$.subscribe(() => this.onMessageAdded())
  }

  ngAfterViewInit() {

  }

  private onMessageAdded() {
    let dialogRef = this.dialog.open(MessageListComponent);
  }

}