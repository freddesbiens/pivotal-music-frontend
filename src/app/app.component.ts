import { Component } from '@angular/core';
import { PLATFORM_ID, APP_ID, Inject, Injector } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';

import { MatDialog } from '@angular/material';

import { MessageService } from "./common/message.service";
import { ServerInfoService } from "./server-info.service";

import { MessageListComponent } from "./messagelist/messagelist.component";
import { ServerInfo } from './domain/server-info';


const HOSTNAME_KEY = makeStateKey("hostname");

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "Music";
  frontEndHostName: string;
  backEndHostName: string;


  constructor(public dialog: MatDialog, private messageService: MessageService,
    private serverInfoService: ServerInfoService, 
    @Inject(PLATFORM_ID) private platformId: Object, private injector: Injector,
    private state: TransferState) {

    this.messageService.newMessage.subscribe(() => this.onMessageAdded())
  }

  ngOnInit() {
    this.frontEndHostName = this.state.get(HOSTNAME_KEY, null as any);

    if (!this.frontEndHostName) {
      if (!isPlatformBrowser(this.platformId)) {
        console.log("Running on server");
        this.frontEndHostName = this.injector.get('host');
        this.state.set(HOSTNAME_KEY, this.frontEndHostName as any);
        console.log(this.frontEndHostName);
      }
      else {
        console.log("Running on client");
        console.log(this.frontEndHostName);
      }
    }
    else{
      console.log("Hostname found.")
      console.log(this.frontEndHostName);
    }

    this.serverInfoService.getServerInfo().subscribe(info => this.onServerInfoChanged(info));
  }

  ngAfterViewInit() {

  }

  ngOnDestroy() {
    this.messageService.newMessage.unsubscribe();
  }

  private onServerInfoChanged(info: ServerInfo){
    this.backEndHostName = info.hostName;
  }

  private onMessageAdded() {
    let dialogRef = this.dialog.open(MessageListComponent);
  }

}