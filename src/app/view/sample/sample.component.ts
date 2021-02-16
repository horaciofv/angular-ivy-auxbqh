import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SampleController } from '../../Controllers/sampleController';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  sampleController: SampleController = new SampleController();

  constructor(private mhttp: HttpClient) {
  }

  ngOnInit(): void {
    // Init. Sometimes empty
    this.sampleController.initController(this.mhttp);
  }
  // UI control method for getting id value from musician autocomplette.
  GetValueFromControl(event: any) {
    this.sampleController.GetValueFromControl(event);
  }
  TestPython() {
    this.sampleController.TestPython(this.mhttp);
  }
  TestNewID()
  {
    this.sampleController.GetNewID();
  }

}
