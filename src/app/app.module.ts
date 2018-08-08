import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElectionResultsComponent } from './components/election-results/election-results.component';
import { GridComponentComponent } from './components/grid-component/grid-component.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    AppComponent,
    ElectionResultsComponent,
    GridComponentComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
