import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { BooksComponent } from './books/books.component';
import { EditbookComponent } from './editbook/editbook.component';
import { ListbooksComponent } from './listbooks/listbooks.component';
import { ViewbookComponent } from './viewbook/viewbook.component';

const routes: Routes = [
  {path:'listbook',component:ListbooksComponent},
  {path:'books',component:BooksComponent},
  {path:'editbook',component:EditbookComponent},
  {path:'viewbook/:id',component:ViewbookComponent},
  {path:'addbook',component:AddbookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
