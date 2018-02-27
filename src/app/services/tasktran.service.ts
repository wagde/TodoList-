import { Injectable } from '@angular/core';
import { Type } from '@angular/core/src/type';
import { Local } from 'protractor/built/driverProviders';

@Injectable()
export class TasktranService {

  constructor() {
    if (JSON.parse(localStorage["saver"])) {
      this.todo = JSON.parse(localStorage["saver"])
    }
    else {
      this.todo = [];
    }

  }
  pushtoDO(X) {
    this.todo.push({ task: X, vis: false })
    this.saveCook()
  }

  saveCook() {
    localStorage["saver"] = JSON.stringify(this.todo);
  }



}
