import { Component, OnInit } from '@angular/core';
import { TasktranService } from '../services/tasktran.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(public data: TasktranService) {
    this.toDoList = data.todo
    this.edittask;
  }



  ngOnInit() {
  }


  editTask(i) {
    let edit = document.getElementById(i + "").contentEditable = true;
    this.data.todo[i].vis = true;

  }
  doneEdit(i) {
    let edit = document.getElementById(i + "").contentEditable = false;
    this.data.todo[i].vis = false;
    this.data.todo[i].task = document.getElementById(i + "").innerHTML;
    this.data.saveCook(this.data.todo)
  }

  deleteTask(i) { 
    this.data.todo.splice(i, 1);
    this.data.saveCook(this.data.todo)

  }
} 
