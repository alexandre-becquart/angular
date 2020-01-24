import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directives';

  list = [1, 2, 3]

  viewMode = 'list';

  courses;
  onLoad() {

    this.courses =
      [
        {
          id: 1,
          name: "course 1"
        },
        {
          id: 2,
          name: "course 2"
        },
        {
          id: 3,
          name: "course 3"
        }
      ]
  }

  trackCourse(index, course) {
    return course ? course.id : undefined
  }

  onAdd() {
    let chiffre = this.courses.length + 1
    this.courses.push({ id: chiffre, name: "course " + chiffre })
  }

  onRemove(c) {
    let index = this.courses.indexOf(c)
    this.courses.splice(index, 1)
  }

  onChange(c) {
    c.name = "change!"
  }
}
