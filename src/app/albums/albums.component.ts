import { Component, OnInit } from '@angular/core';

import { Album } from '../domain/album';

import { MusicService } from '../music.service';

import { EnumValuesPipe } from "../enum-values.pipe";

enum SortAttributes {
  artist = "artist",
  genre = "genre",
  year = "year",
  title = "title"
}

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {

  albums: Album[];
  sortAttributes = SortAttributes;
  sortBy: any;
  sortAscending: boolean;

  constructor(private music: MusicService) {
    this.sortBy = SortAttributes.title
    this.sortAscending = true;

  }

  ngOnInit() {
    this.music.getAlbums().subscribe(result => {
      this.orderByArray(result, this.sortBy, true).map(item => item.title);
      this.albums = result;
    });
  }

  onSortByChanged() {

    switch (this.sortBy) {
      case SortAttributes.artist:
        this.orderByArray(this.albums, "artist", this.sortAscending).map(item => item.artist);
        break;
      case SortAttributes.genre:
        this.orderByArray(this.albums, "genre", this.sortAscending).map(item => item.genre);
        break;
      case SortAttributes.year:
        this.orderByArray(this.albums, "releaseYear", this.sortAscending).map(item => item.releaseYear);
        break;
      case SortAttributes.title:
        this.orderByArray(this.albums, "title", this.sortAscending).map(item => item.title);
        break;
    }
  }

 onSortOrderChanged(){
    this.sortAscending = !this.sortAscending;
    this.onSortByChanged();
}

  private orderByArray<T, K extends keyof T>(values: T[], orderType: K, ascending: boolean) {
    let multiplier = ascending ? 1 : -1;

    return values.sort((a, b) => {
      if (a[orderType] < b[orderType]) {
        return -1 * multiplier;
      }
      else if (a[orderType] > b[orderType]) {
        return 1 * multiplier;
      }
      else {
        return 0;
      }
    });
  }
}
