import { Component, OnInit } from '@angular/core';

import { ServerInfoService } from '../server-info.service';



@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  constructor(private serverInfo: ServerInfoService) { }

  ngOnInit() {
  }

  onTestClick() {
    this.serverInfo.refreshServerInfoFromService().subscribe(result => { console.log(result); });
  }

}
