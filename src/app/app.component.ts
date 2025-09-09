import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {fontAwesomeIcons} from "./shared/font-awesome-icons";
import {NavigationComponent} from "./layout/navigation/navigation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FontAwesomeModule, RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'spotify-clone-front';
  private faIconLibrary = inject(FaIconLibrary)

  ngOnInit(): void {
    this.initFromAwesome();
  }

  private initFromAwesome(){
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}
