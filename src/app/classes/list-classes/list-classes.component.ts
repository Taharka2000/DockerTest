import { Component } from '@angular/core';
import { Class } from '../listesC.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-classes',
  templateUrl: './list-classes.component.html',
  styleUrls: ['./list-classes.component.css']
})
export class ListClassesComponent {
  classes: Class[] = [];
  newClassName = '';

  addClass() {
    const newClass: Class = {
      id: this.classes.length + 1,
      name: this.newClassName
    };
    this.classes.push(newClass);
    this.newClassName = '';
  }

}
