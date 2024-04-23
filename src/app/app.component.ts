import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./classes/nav/nav.component";
import { ClassesModule } from './classes/classes.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavComponent,ClassesModule, BrowserModule,
      FormsModule ]
})
export class AppComponent {
  title = 'sammba';
}
