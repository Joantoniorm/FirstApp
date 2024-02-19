import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/