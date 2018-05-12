import { Component } from '@angular/core';
import { PLATFORM_ID, APP_ID, Inject, Injector } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';

import { MatDialog } from '@angular/material';

import { MessageService } from "./message.service";
import { MessageListComponent } from "./messagelist/messagelist.component";

const HOSTNAME_KEY = makeStateKey("hostname");

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "Music";
  hostname: string;

  constructor(public dialog: MatDialog, messageService: MessageService,
    @Inject(PLATFORM_ID) private platformId: Object, private injector: Injector,
    private state: TransferState) {

    messageService.messageAdded$.subscribe(() => this.onMessageAdded())
  }

  ngOnInit() {
    this.hostname = this.state.get(HOSTNAME_KEY, null as any);

    if (!this.hostname) {
      if (!isPlatformBrowser(this.platformId)) {
        console.log("Running on server");
        this.hostname = this.injector.get('host');
        this.state.set(HOSTNAME_KEY, this.hostname as any);
        console.log(this.hostname);
      }
      else {
        console.log("Running on client");
        console.log(this.hostname);
      }
    }
    else{
      console.log("Hostname found.")
      console.log(this.hostname);
    }
  }

  ngAfterViewInit() {

  }

  private onMessageAdded() {
    let dialogRef = this.dialog.open(MessageListComponent);
  }

}