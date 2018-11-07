import { Component } from '@angular/core';

@Component({
  selector: 'Students',
  template: '<h2>{{ getTitle() }}</h2>'
})
export class StudentsComponent {
  title = "My List of Students"

  getTitle() {
    return this.title;
  }

  getCurrentDate() {
    return new Date();
  }
}