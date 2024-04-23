import { Injectable } from '@angular/core';
import { Class } from './listesC.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
 

  constructor() { }

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

  deleteClass(classId: number) {
    this.classes = this.classes.filter(c => c.id !== classId);
  }
}
