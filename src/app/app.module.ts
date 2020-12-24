import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from '@ag-grid-community/angular';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SnapshotComponent } from './snapshot/snapshot.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SnapshotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
