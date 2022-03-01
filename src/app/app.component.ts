import { Component } from '@angular/core';
import {Amplify} from 'aws-amplify'

import awsconfig from '../aws-exports'

Amplify.configure(awsconfig)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled';
  constructor() {

  }
}
