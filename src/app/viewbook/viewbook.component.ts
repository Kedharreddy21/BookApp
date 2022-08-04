import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  id!:number;
  
  constructor(private route:ActivatedRoute,private http:HttpClient) { 
    this.id = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    console.log("view Book:"+ this.id);
  }
  book:any;

  getBook(){
    const url ="http://localhost:3000/books" + this.id;
    this.http.get(url).subscribe ((res:any)=>{
      //console.log(res);
      this.book = res;
    });
  }
}
