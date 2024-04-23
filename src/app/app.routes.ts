import { Routes } from '@angular/router';
import { ListClassesComponent } from './classes/list-classes/list-classes.component';
import { StudentsComponent } from './classes/students/students.component';

export const routes: Routes = [
    {path:"listClasses",component:ListClassesComponent},
    {path:"students",component:StudentsComponent}
];
