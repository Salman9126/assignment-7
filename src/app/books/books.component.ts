import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public books = ['Angular2 Cookbook', 'Node JS In Action', 'Programming Android', 'Big Data: A Revolution That Will Transform How We Live, Work, and Think', 'Artificial Intelligence: A Modern Approach'];
  
  constructor() { }

  ngOnInit() {
  }

}
