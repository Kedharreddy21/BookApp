import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListbooksComponent } from './listbooks/listbooks.component';
import { HeaderComponent } from './header/header.component';
import { AddbookComponent } from './addbook/addbook.component';
import { EditbookComponent } from './editbook/editbook.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { TittlePipe } from './tittle.pipe';
import { AuthorPipe } from './author.pipe';
import { PricePipe } from './price.pipe';
import { YearPipe } from './year.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListbooksComponent,
    HeaderComponent,
    AddbookComponent,
    EditbookComponent,
    ViewbookComponent,
    HomeComponent,
    BooksComponent,
    TittlePipe,
    AuthorPipe,
    PricePipe,
    YearPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
