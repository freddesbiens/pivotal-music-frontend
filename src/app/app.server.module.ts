import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
 
import {FlexLayoutServerModule} from '@angular/flex-layout/server';


import { AppModule } from './app.module';
import { AppComponent } from './app.component';
 
@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'pivotal-music' }),
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule,
    FlexLayoutServerModule
  ],
  providers: [
    // Add universal-only providers here
  ],
  bootstrap: [ AppComponent ],
})
export class AppServerModule {}