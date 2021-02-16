import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import {FoldersManagerController } from '../../Controllers/FoldersManagerController';

@Component({
  selector: 'app-folders-manager',
  templateUrl: './folders-manager.component.html',
  styleUrls: ['./folders-manager.component.css']
})
export class FoldersManagerComponent implements OnInit {

  constructor() { }

  foldersManagerController: FoldersManagerController = new FoldersManagerController();

  ngOnInit(): void {
    this.foldersManagerController.init();
  }
  SetLabelSearch(mValue: number)
  {
    this.foldersManagerController.SetLabelSearch(mValue);
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.foldersManagerController.mArraySample, event.previousIndex, event.currentIndex);
  }

}
