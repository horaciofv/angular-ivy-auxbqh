import { Component, OnInit } from '@angular/core';
import { MInitOL } from '../../../Scripts/Common/m_ol/init'
@Component({
  selector: 'app-test-components',
  templateUrl: './test-components.component.html',
  styleUrls: ['./test-components.component.css']
})
export class TestComponentsComponent implements OnInit {

  minitol: MInitOL = new MInitOL();
  constructor() { }

  ngOnInit(): void {
    this.minitol.initMap4326();
  }



}
