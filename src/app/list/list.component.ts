import { Component, OnInit } from '@angular/core';
import { TasktranService } from '../services/tasktran.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public data: TasktranService) {
    this.todoArray = [];
    this.task = ""
  }

  add(newTodo) {
    this.data.pushtoDO(newTodo)
    this.task = ""
  }

  ngOnInit() {
  }

}
