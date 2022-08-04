import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.css']
})
export class ListbooksComponent implements OnInit {

  constructor(private http: HttpClient) {
    console.log("ListBookComponent");
   }

  ngOnInit(): void {
    console.log("Lifecycle Init method");
    this.getBooks();
  }
  books!:any[];
  title:string="";
  getBooks(){
    const url ="http://localhost:3000/books";
    this.http.get(url).subscribe ((res:any)=>{
      console.log(res);
      this.books = res;

    });
}
}
